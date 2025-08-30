‏import sendgrid from "@sendgrid/mail";

‏sendgrid.setApiKey("process.env.SENDGRID_API_KEY");

‏export default async function handler(req, res) {
‏ if (req.method !== "POST") {
‏ return res.status(405).json({ message: "Method not allowed" });
}

‏ const { nimber, namea, dete, iqd, pa, wp } = req.body;

‏ try {
‏ await sendgrid.send({
‏ to: "hamoozimran340@gmail.com", // بريدك لاستقبال الرسائل
‏ from: "hamoozimran340@gmail.com", //
‏ subject: "المعلومات",
‏ text: `
الرقم: ${nimber}
الاسم: ${namea}
التاريخ: ${dete}
الوجهة: ${iqd}
الاسم الثاني: ${pa}
الكمية: ${wp}
`,
});

‏ res.status(200).json({
‏ message: "تم الإرسال بنجاح",
‏ redirect: "https://rayan-cyan.vercel.app/reservation/index.html"
});
‏ } catch (error) {
‏ console.error("خطأ أثناء الإرسال:", error);
‏ res.status(500).json({ message: "حدث خطأ أثناء الإرسال" });
}
}
