import nodemailer from "nodemailer";

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method not allowed" });
}

const { nimber, namea, dete, iqd, pa, wp } = req.body;

// إعداد SMTP - هون ممكن تستخدم Gmail
const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL_USER, // بريدك
pass: process.env.EMAIL_PASS, // كلمة السر أو App Password
},
});

try {
await transporter.sendMail({
from: process.env.EMAIL_USER,
to: process.env.EMAIL_USER, // يوصلك لنفس البريد
subject: "📝 رسالة جديدة من الموقع",
text: `
الرقم: ${nimber}
الاسم: ${namea}
التاريخ: ${dete}
الوجهة: ${iqd}
الاسم الثاني: ${pa}
الكمية: ${wp}
`,
});

// بعد الإرسال - رجع تحويل لصفحة الشكر
res.redirect(302, "https://rayan-cyan.vercel.app/reservation/index.html");
} catch (error) {
console.error(error);
res.status(500).json({ message: "خطأ أثناء الإرسال" });
}
}
