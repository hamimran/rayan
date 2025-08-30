import sendgrid from "@sendgrid/mail";

export default async function handler(req, res) {
console.log("🔵 [DEBUG] API function called"); // بداية تنفيذ

if (req.method !== "POST") {
console.log("🟠 [DEBUG] Wrong method:", req.method);
return res.status(405).json({ message: "Method not allowed" });
}

console.log("🟢 [DEBUG] Request body:", req.body);

const { nimber, namea, dete, iqd, pa, wp } = req.body;

try {
// إعداد مفتاح SendGrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
console.log("✅ [DEBUG] API Key set");

// إعداد الرسالة
const msg = {
to: "hamoozimran340@gmail.com",
from: "hamoozimran340@gmail.com",
subject: "📝 رسالة جديدة من الموقع",
text: `
الرقم: ${nimber}
الاسم: ${namea}
التاريخ: ${dete}
الوجهة: ${iqd}
الاسم الثاني: ${pa}
الكمية: ${wp}
`,
};

console.log("📧 [DEBUG] Message prepared:", msg);

// إرسال البريد
await sendgrid.send(msg);
console.log("✅ [DEBUG] Email sent successfully");

// إعادة توجيه المستخدم لصفحة الشكر
return res.redirect(302, "https://rayan-cyan.vercel.app/reservation/index.html");
} catch (error) {
console.error("❌ [ERROR] Failed to send email:", error);
return res.status(500).json({ message: "خطأ أثناء الإرسال", error: error.message });
}
}
