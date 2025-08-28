import nodemailer from "nodemailer";

export default async function handler(req, res) {
if (req.method === "POST") {
const { nimber, namea, dete, iqd, pa, wp } = req.body;

// إعداد البريد (مثال باستخدام Gmail)
let transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: "hamoozimran340@gmail.com", 
pass: "eliynyhzedinznct" 
}
});

let mailOptions = {
from: "yourgmail@gmail.com",
to: "hamoozimran340@gmail.com",
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
await transporter.sendMail(mailOptions);
res.status(200).json({ success: true, message: "تم إرسال المعلومات بنجاح ✅" });
} catch (error) {
res.status(500).json({ success: false, error: error.message });
}
} else {
res.status(405).json({ error: "Method not allowed" });
}

}

