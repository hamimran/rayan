export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method not allowed" });
}

console.log("✅ API تم استدعاؤه");
console.log("📦 البيانات المستلمة:", req.body);

// رجع رد بسيط بدون إرسال إيميل
res.status(200).json({
message: "البيانات وصلت بنجاح 🚀",
data: req.body,
});
}
