import sgMail from "@sendgrid/mail";

sgMail.setApiKey(MNHA1Z2A8YZ4TJV2A3P8NGQV; // استخدم متغير البيئة في Vercel

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

const { nimber, namea, dete, iqd, pa, wp } = req.body;

const msg = {
to: "hamoozimran340@gmail.com", // البريد الذي تريد استقبال الرسائل عليه
from: "hamoozimran340@gmail.com", // نفس البريد أو أي بريد مصدق في SendGrid
subject: `المستخدم : ${namea}`,
html: `
<h2>الرقم: ${nimber}</h2><hr/>
<h2>الاسم: ${namea}</h2><hr/>
<h2>تاريخ: ${dete}</h2><hr/>
<h2>الوجهة: ${iqd}</h2><hr/>
<h2>الاسم: ${pa}</h2><hr/>
<h2>الكمية: ${wp}</h2><hr/>
`
};

try {
await sgMail.send(msg);
res.status(200).json({ success: true, redirect: "../reservation/index.html" });
} catch (error) {
console.error(error);
res.status(500).json({ success: false, error: error.message });
}
}
