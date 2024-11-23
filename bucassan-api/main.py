from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import uvicorn
import os

app = FastAPI()

origins = [
    "https://bucassan.onrender.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    nombres: str
    apellidos: str
    email: str
    telefono: str
    consulta: str

@app.post("/api/contact")
async def contact(form: ContactForm):
    sender_email = "bucassan.clinica.dental@gmail.com"
    receiver_email = "jngmzrjs@gmail.com"
    password = "xaxd begf yvfn niei"

    subject = f"{form.nombres}, {form.apellidos} se quiere contactar con usted"
    body = f"""
    Nombres: {form.nombres}
    Apellidos: {form.apellidos}
    Email: {form.email}
    Teléfono: {form.telefono}
    Consulta:
    {form.consulta}
    """

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject

    message.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())
        return {"message": "Correo enviado con éxito"}
    except Exception as e:
        return {"message": f"Error al enviar el correo: {e}"}

if __name__ == "__main__":
    port = int(os.getenv("PORT", 10000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)