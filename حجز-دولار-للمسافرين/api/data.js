// data.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method not allowed" });
}

const { nimber, namea, dete, iqd, pa, wp } = req.body;

// ⚠️ للإختبار فقط: الإيميل وApp Password مضافين مباشرة
const EMAIL_USER = "hamoozimran340@gmail.com";
const EMAIL_PASS = "bukxdbrzvabrbisf"; // بدون فراغات

// إعداد SMTP مع Gmail
const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: EMAIL_USER,
pass: EMAIL_PASS,
},
});

try {
await transporter.sendMail({
from: EMAIL_USER,
to: EMAIL_USER, // الإيميل سيستقبل نفسه
subject: "المعلومات",
text: `
الرقم: ${nimber}
الاسم: ${namea}
التاريخ: ${dete}
الوجهة: ${iqd}
الاسم الثاني: ${pa}
الكمية: ${wp}
`,
});

// بعد الإرسال، أرسل JSON بالتحويل
res.status(200).json({
message: "تم الإرسال بنجاح",
redirect: "https://rayan-cyan.vercel.app/reservation/index.html"
});

} catch (error) {
console.error("خطأ أثناء الإرسال:", error);
res.status(500).json({ message: "خطأ أثناء الإرسال" });
}
}

