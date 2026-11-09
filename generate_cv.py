import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle, PageBreak
)

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=40,
        rightMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Base colors
    primary_color = colors.HexColor("#1A1A1A")
    link_color = colors.HexColor("#0D529C")
    line_color = colors.HexColor("#333333")

    # Custom styles
    name_style = ParagraphStyle(
        'CVName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=primary_color,
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'CVContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=primary_color,
        spaceAfter=12
    )

    section_header_style = ParagraphStyle(
        'CVSectionHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=primary_color,
        spaceBefore=10,
        spaceAfter=3,
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'CVBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=primary_color,
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'CVBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=primary_color,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3
    )

    item_title_style = ParagraphStyle(
        'CVItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=primary_color
    )

    item_right_style = ParagraphStyle(
        'CVItemRight',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=primary_color,
        alignment=2 # right
    )

    item_sub_style = ParagraphStyle(
        'CVItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=12,
        textColor=primary_color
    )

    story = []

    # 1. Header
    story.append(Paragraph("<b>M. Reno Hidayat</b>", name_style))
    contact_text = (
        'Sumedang, West Java, Indonesia &nbsp;|&nbsp; +62 821-1087-8770 &nbsp;|&nbsp; '
        '<a href="mailto:hidayatreno085@gmail.com"><font color="#0D529C">hidayatreno085@gmail.com</font></a><br/>'
        '<a href="https://linkedin.com/in/renohidayat"><font color="#0D529C">linkedin.com/in/renohidayat</font></a> &nbsp;|&nbsp; '
        '<a href="https://github.com/Renohidayat"><font color="#0D529C">github.com/Renohidayat</font></a> &nbsp;|&nbsp; '
        '<a href="https://renohidayat.web.app"><font color="#0D529C">renohidayat.web.app</font></a>'
    )
    story.append(Paragraph(contact_text, contact_style))

    # Helper for Section Title with Line
    def add_section_header(title):
        story.append(Paragraph(f"<b>{title}</b>", section_header_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=line_color, spaceBefore=2, spaceAfter=6))

    # Helper for 2-column header row
    def add_item_header(left_title, right_info, left_sub="", right_sub=""):
        table_data = [
            [Paragraph(f"<b>{left_title}</b>", item_title_style), Paragraph(right_info, item_right_style)]
        ]
        if left_sub or right_sub:
            table_data.append(
                [Paragraph(f"<i>{left_sub}</i>", item_sub_style), Paragraph(right_sub, item_right_style)]
            )
        t = Table(table_data, colWidths=[380, 152])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 1),
            ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ]))
        story.append(t)
        story.append(Spacer(1, 2))

    # 2. SUMMARY
    add_section_header("SUMMARY")
    summary_text = (
        "Informatics graduate from Universitas Sebelas April, focused on web and mobile application development, "
        "backend systems, and AI integration. Experienced in developing independent projects and information "
        "systems using Flutter, Laravel, JavaScript, Python, and Firebase, including a digital examination platform, "
        "institutional websites, and an AI-powered travel planning application. Familiar with REST API development, "
        "database management, and cloud deployment. Interested in building innovative, scalable, and impactful "
        "digital solutions."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. EXPERIENCE
    add_section_header("EXPERIENCE")

    # Experience 1
    add_item_header("Fakultas Ekonomi dan Bisnis (FEB) UNSAP", "Sumedang, Indonesia", "Full-Stack Developer", "Nov 2025 - May 2026")
    story.append(Paragraph("• &nbsp; Redesigned and redeveloped the official faculty website using Laravel, PHP, MySQL, and Tailwind CSS to improve its interface and presentation of academic information.", bullet_style))
    story.append(Paragraph("• &nbsp; Designed and developed SIPENA, a digital examination and attendance platform integrating Flutter, React, and Firebase.", bullet_style))
    story.append(Paragraph("• &nbsp; Implemented real-time attendance monitoring with 10-second heartbeat tracking and background activity detection.", bullet_style))
    story.append(Paragraph("• &nbsp; Integrated automated PDF generation for attendance records and examination reports, along with Firebase Cloud Messaging (FCM) notifications.", bullet_style))
    story.append(Paragraph("• &nbsp; Developed content management features for faculty news, lecturer profiles, academic information, and institutional activities.", bullet_style))
    story.append(Spacer(1, 4))

    # Experience 2
    add_item_header("KKN Tematik Desa Serang – Universitas Sebelas April", "Sumedang, Indonesia", "Web Developer & Digital Documentation", "Jan 2026 - Feb 2026")
    story.append(Paragraph("• &nbsp; Developed a digital storefront and product catalog for Dapoer Sari Pohaci, a local micro, small, and medium enterprise (MSME).", bullet_style))
    story.append(Paragraph("• &nbsp; Integrated WhatsApp ordering to simplify customer inquiries and orders.", bullet_style))
    story.append(Paragraph("• &nbsp; Organized digital documentation and multimedia archives to support community program reporting and promotion.", bullet_style))
    story.append(Spacer(1, 4))

    # 4. PROJECTS AND COMMUNITY
    add_section_header("PROJECTS AND COMMUNITY")

    # Project 1: Jelajah Nusantara
    add_item_header("Jelajah Nusantara AI – AI-Powered Travel Planner", "2026")
    story.append(Paragraph(
        "Developed an AI-powered travel planning web application using JavaScript, Vite, Node.js, Express, and Firebase. "
        "Integrated the DeepSeek API to generate travel itineraries, Leaflet.js for map visualization, and Chart.js for budget visualization. "
        "Deployed the application on Vercel.", body_style
    ))
    story.append(Spacer(1, 4))

    # PAGE BREAK FOR EXACT 2-PAGE LAYOUT
    story.append(PageBreak())

    # Project 2: CGMI
    add_item_header("CGMI Assessment App – Civic GovTech Platform", "2026")
    story.append(Paragraph(
        "Developed a web-based assessment platform for evaluating collaborative governance in Sumedang. "
        "Implemented 30 indicators across six dimensions, automated scoring, and radar chart visualization. "
        "Integrated Firestore, respondent access codes, and Google OAuth-based administrator access.", body_style
    ))
    story.append(Spacer(1, 5))

    # Project 3: Sentiment Analysis
    add_item_header("Sentiment Analysis – Machine Learning Research", "2026")
    story.append(Paragraph(
        "Conducted sentiment analysis of Indonesian YouTube comments concerning the public controversy surrounding Joko Widodo’s academic degree. "
        "Applied TF-IDF feature extraction and Support Vector Machine (SVM) with an RBF kernel. "
        "Developed a web interface using React and a backend API using FastAPI.", body_style
    ))
    story.append(Spacer(1, 5))

    # Project 4: Google Cloud
    add_item_header("Google Cloud Skills & Technology Programs", "2025 - 2026")
    story.append(Paragraph(
        "Completed Google Cloud Computing Foundations learning activities and earned 10,195 points in the Gold League. "
        "Completed Google Cloud skill badges related to load balancing, secure networking, application development, and machine learning APIs. "
        "Participated in #JuaraVibeCoding Study Jam by Google Developer Groups (GDG), May 2026. "
        "Attended the Digital Literacy Seminar for University Students organized by Indonesia’s Ministry of Communication and Informatics, 2024.", body_style
    ))
    story.append(Spacer(1, 8))

    # 5. EDUCATION
    add_section_header("EDUCATION")
    add_item_header("Universitas Sebelas April (UNSAP)", "Sumedang, Indonesia", "Bachelor’s Degree in Informatics (S.Kom.), GPA 3.52", "2022 - 2026")
    story.append(Spacer(1, 8))

    # 6. SKILLS
    add_section_header("SKILLS")
    story.append(Paragraph("• &nbsp; <b>Programming Languages:</b> JavaScript, TypeScript, Dart, PHP, Python, HTML5, CSS3, SQL", bullet_style))
    story.append(Paragraph("• &nbsp; <b>Frontend Development:</b> React, Vite, Tailwind CSS, Responsive UI, Progressive Web Apps (PWA)", bullet_style))
    story.append(Paragraph("• &nbsp; <b>Mobile Development:</b> Flutter, Dart, Android, Cross-Platform Development", bullet_style))
    story.append(Paragraph("• &nbsp; <b>Backend Development:</b> Laravel, Node.js, Express.js, FastAPI, REST APIs, Firebase Cloud Functions", bullet_style))
    story.append(Paragraph("• &nbsp; <b>Database & Cloud:</b> MySQL, Cloud Firestore, Firebase Realtime Database, Firebase Authentication, Firebase Hosting, Firebase Cloud Messaging, Google Cloud", bullet_style))
    story.append(Paragraph("• &nbsp; <b>AI & Data Analysis:</b> Scikit-learn, SVM, TF-IDF, Natural Language Processing (NLP), PySastrawi, LLM API Integration, PLS-SEM", bullet_style))
    story.append(Paragraph("• &nbsp; <b>Tools & Practices:</b> Git, GitHub, Postman, Chart.js, Leaflet.js, System Architecture, Agile/Scrum", bullet_style))

    doc.build(story)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    target1 = "public/m_reno_hidayat_cv.pdf"
    build_pdf(target1)
