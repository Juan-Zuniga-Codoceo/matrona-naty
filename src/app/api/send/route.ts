import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Configura el transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Tu Gmail
    pass: process.env.EMAIL_PASS  // Tu contraseña de aplicación de Gmail
  }
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contacto@matronanaty.cl',
      subject: `Nuevo contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}