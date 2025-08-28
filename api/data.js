import nodemailer from "nodemailer";



export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({ error: "Method not allowed" });

  }



  const { nimber, namea, dete, iqd, pa, wp } = req.body;



  try {

    let transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",

      port: 465,

      secure: true,

      auth: {

        user: "hamoozimran340@gmail.com",

        pass: "plhngxhhvkexptal" // بدون فراغات

      }

    });



    let mailOptions = {

      from: "hamoozimran340@gmail.com",

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



    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, redirect: "reservation/index.html" });



  } catch (error) {

    console.error(error);

    res.status(500).json({ success: false, error: error.message });

  }

}


