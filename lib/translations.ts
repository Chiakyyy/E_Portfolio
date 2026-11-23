// This dictionary exports application translations for all supported languages.
export type Language = "en" | "fr" | "ar";

// Interface contract for language dictionary entries.
export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    intro: string;
    contactCta: string;
    displayName: string;
  };
  about: {
    sectionTitle: string;
    heading: string;
    bio: string;
    nameLabel: string;
    nameValue: string;
    locationLabel: string;
    locationValue: string;
    projectsLabel: string;
    internshipsLabel: string;
    satisfactionLabel: string;
    resumeCta: string;
    resumeFile: string;
  };
  skills: {
    sectionTitle: string;
    subtitle: string;
  };
  projects: {
    sectionTitle: string;
    livePreview: string;
    closePreview: string;
    interactivePreview: string;
    tabSandbox: string;
    tabSpecs: string;
    keyHighlights: string;
    liveEngine: string;
    items: {
      gconstat: {
        title: string;
        subtitle: string;
        description: string;
        stats: { label: string; value: string }[];
        reportTitle: string;
        sqliteSynced: string;
        selectArea: string;
        claimStatus: string;
        targetZonePrefix: string;
        metaDescription: string;
        cameraReady: string;
        policy: string;
        blueprint: string;
        skiaVector: string;
        impactLogged: string;
        photosEvidence: string;
        geotagged: string;
        dbStorage: string;
        pendingSync: string;
        zones: string[];
      };
      deepleaf: {
        title: string;
        subtitle: string;
        description: string;
        stats: { label: string; value: string }[];
        engineTitle: string;
        latency: string;
        detectedTitle: string;
        scanningTitle: string;
        aiMeta: string;
        rescan: string;
        confidence: string;
        disease: string;
        offlineTiming: string;
        tagInt8: string;
        tagZeroNetwork: string;
      };
      syndicflow: {
        title: string;
        subtitle: string;
        description: string;
        stats: { label: string; value: string }[];
        suiteTitle: string;
        realtimeCart: string;
        itemMeal: string;
        itemFee: string;
        cartQuantity: string;
        calculatedTotal: string;
        directPdf: string;
        downloadInvoice: string;
        alertInvoice: string;
        residenceTitle: string;
        syndicMaintenance: string;
        mealVoucher: string;
        pdfReady: string;
        cleanMvvm: string;
      };
      telemetry: {
        title: string;
        subtitle: string;
        description: string;
        stats: { label: string; value: string }[];
        monitorTitle: string;
        healthy: string;
        postgresTps: string;
        p99Latency: string;
        zabbixAlerts: string;
        optimalLoad: string;
        latencyTarget: string;
        agentActive: string;
        uptime: string;
      };
    };
  };
  contact: {
    sectionTitle: string;
    heading: string;
    subheading: string;
    followMe: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    nameField: string;
    namePlaceholder: string;
    emailField: string;
    emailPlaceholder: string;
    messageField: string;
    messagePlaceholder: string;
    submitButton: string;
    sendingButton: string;
    successTitle: string;
    successSubtitle: string;
    errorTitle: string;
    errorSubtitle: string;
    copyright: string;
  };
}

// Complete translations catalog containing english and french entries.
export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Mobile Architect • Flutter / React Native / .NET MAUI",
      intro:
        "Cross-Platform Mobile Developer Specializing In Building High-Performance, Offline-First Apps That Scale Across Android & iOS.",
      contactCta: "Contact Me",
      displayName: "amr",
    },
    about: {
      sectionTitle: "ABOUT ME",
      heading: "Cross-Platform Mobile Developer",
      bio: "I build modern, responsive, and high-performance mobile applications using Flutter, React Native, and .NET MAUI. I focus on offline-first reliability, native hardware integration, and clean UI architectures.",
      nameLabel: "Name",
      nameValue: "Amr Agouriane",
      locationLabel: "Location",
      locationValue: "Morocco",
      projectsLabel: "projects",
      internshipsLabel: "internships",
      satisfactionLabel: "Client Satisfaction",
      resumeCta: "Download Resume",
      resumeFile: "/AGOURIANE_AMR_CV_EN.pdf",
    },
    skills: {
      sectionTitle: "SKILLS",
      subtitle: "Explore my technical proficiencies and engineering capabilities",
    },
    projects: {
      sectionTitle: "PROJECTS",
      livePreview: "Live Preview",
      closePreview: "Close Preview",
      interactivePreview: "Interactive Live Preview",
      tabSandbox: "Live App Sandbox",
      tabSpecs: "Offline & Mobile Specs",
      keyHighlights: "Key Engineering Highlights",
      liveEngine: "Live Engine",
      items: {
        gconstat: {
          title: "GConstat & My_Expert",
          subtitle:
            "Automotive Insurance Claim Assessment & SkiaSharp Diagramming Suite",
          description:
            "Enterprise mobile platform built for loss adjusters and policyholders. Features hardware camera integration, offline-first SQLite synchronization, and interactive vehicle damage blueprint sketching with SkiaSharp.",
          stats: [
            { label: "Sync Engine", value: "Offline-First" },
            { label: "Rendering", value: "SkiaSharp 2D" },
            { label: "Storage", value: "SQLite Encrypted" },
          ],
          reportTitle: "Automotive Accident Report #GC-9042",
          sqliteSynced: "SQLite Synced",
          selectArea:
            "Select Damaged Area (SkiaSharp Canvas Simulation):",
          claimStatus: "Claim Status Preview",
          targetZonePrefix: "Target Zone:",
          metaDescription:
            "High resolution photo metadata embedded with gps coordinates, timestamp, and local sqlite storage cache.",
          cameraReady: "Hardware Camera Ready",
          policy: "Policy #MA-8491",
          blueprint: "Vehicle Damage Blueprint",
          skiaVector: "SkiaSharp Vector",
          impactLogged: "Front Bumper Impact Logged",
          photosEvidence: "4 Evidence Photos",
          geotagged: "Geotagged & Signed",
          dbStorage: "SQLite Database",
          pendingSync: "Pending Cloud Sync",
          zones: [
            "Front Bumper",
            "Driver Door",
            "Rear Windshield",
            "Headlight Left",
          ],
        },
        deepleaf: {
          title: "DeepLeaf AI & Native SDKs",
          subtitle:
            "Edge Machine Learning Crop Diagnostics & Cross-Platform Bridge SDK",
          description:
            "Dual Flutter and React Native diagnostic application powered by quantized TensorFlow Lite models running directly on device chips for instant offline plant disease classification with sub-20ms latency.",
          stats: [
            { label: "Inference", value: "14ms On-Device" },
            { label: "Model Size", value: "4.8 MB Quantized" },
            { label: "Accuracy", value: "98.4% F1-Score" },
          ],
          engineTitle: "TFLite Mobile Vision Inference Engine",
          latency: "14ms Latency",
          detectedTitle:
            "Tomato Early Blight Detected (Confidence: 98.6%)",
          scanningTitle: "Scanning Crop Foliage...",
          aiMeta:
            "Zero cloud connection required. Model executing locally via tflite quantized weights.",
          rescan: "Re-Scan Sample",
          confidence: "98.4% Confidence",
          disease: "Early Blight (Alternaria solani)",
          offlineTiming: "Offline analysis executed in 14ms",
          tagInt8: "Quantized INT8",
          tagZeroNetwork: "Zero Network Calls",
        },
        syndicflow: {
          title: "SyndicFlow & AllRestau",
          subtitle:
            "Multi-Flavor Mobile Ordering, Property Management & Receipt Engine",
          description:
            "High volume property syndicate dues collection and restaurant POS ordering application. Employs clean MVVM architectures, real-time Firebase listeners, and on-device PDF generation.",
          stats: [
            { label: "Architecture", value: "Clean MVVM" },
            { label: "Document Engine", value: "SkiaSharp PDF" },
            { label: "Latency", value: "Sub-Second" },
          ],
          suiteTitle: "Multi-Tenant Syndic & Restaurant Suite",
          realtimeCart: "Realtime Cart",
          itemMeal: "Gourmet Mediterranean Bowl",
          itemFee: "Property Syndic Monthly Fee",
          cartQuantity: "Cart Quantity:",
          calculatedTotal: "Calculated Total",
          directPdf: "Direct PDF receipt compiler ready",
          downloadInvoice: "Download Compiled Invoice",
          alertInvoice:
            "Invoice PDF generated and cached to device memory.",
          residenceTitle: "Syndic Residence Oasis & Cafe",
          syndicMaintenance: "Monthly Syndicate Maintenance",
          mealVoucher: "Express Meal Voucher #204",
          pdfReady: "PDF Invoice #INV-8891 Ready",
          cleanMvvm: "Clean MVVM Architecture",
        },
        telemetry: {
          title: "Enterprise APM Telemetry",
          subtitle:
            "Mission-Critical Cluster Health Monitoring & Distributed Metrics Console",
          description:
            "Real-time observability client for infrastructure engineers and DevOps teams. Integrates Dynatrace telemetry and Zabbix agents with Spring Boot and PostgreSQL backend streams.",
          stats: [
            { label: "Uptime", value: "99.98% Monitored" },
            { label: "Data Pipeline", value: "Kafka & WebSocket" },
            { label: "Cluster Nodes", value: "24 Nodes Live" },
          ],
          monitorTitle: "APM Telemetry Node Monitor",
          healthy: "99.98% Healthy",
          postgresTps: "PostgreSQL TPS",
          p99Latency: "Node P99 Latency",
          zabbixAlerts: "Zabbix Alerts",
          optimalLoad: "Optimal load",
          latencyTarget: "Sub-10ms target",
          agentActive: "Dynatrace Agent v8.1 Active",
          uptime: "99.98% Uptime",
        },
      },
    },
    contact: {
      sectionTitle: "GET IN TOUCH",
      heading: "Contact Information",
      subheading:
        "Have a project in mind, mobile architectural questions, or looking to collaborate? Reach out directly and let us build something exceptional.",
      followMe: "Follow Me",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Morocco",
      nameField: "Name",
      namePlaceholder: "Your Name",
      emailField: "Email",
      emailPlaceholder: "Your Email",
      messageField: "Message",
      messagePlaceholder: "I would love to hear about your project",
      submitButton: "Send Message",
      sendingButton: "Sending...",
      successTitle: "Message sent successfully",
      successSubtitle: "I will get back to you promptly.",
      errorTitle: "Failed to send message. Please try again.",
      errorSubtitle: "Please check your network or try again later.",
      copyright: "© 2026 Amr Agouriane. All Rights Reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      badge: "Architecte Mobile • Flutter / React Native / .NET MAUI",
      intro:
        "Développeur Mobile Cross-Platform spécialisé dans la création d'applications performantes, offline-first et évolutives sur Android & iOS.",
      contactCta: "Me contacter",
      displayName: "amr",
    },
    about: {
      sectionTitle: "À PROPOS",
      heading: "Développeur Mobile Cross-Platform",
      bio: "Je conçois des applications mobiles modernes, réactives et performantes avec Flutter, React Native et .NET MAUI. J'accorde une priorité absolue à la fiabilité hors-ligne, l'intégration matérielle native et des architectures UI épurées.",
      nameLabel: "Nom :",
      nameValue: "Amr Agouriane",
      locationLabel: "Localisation :",
      locationValue: "Maroc",
      projectsLabel: "projets",
      internshipsLabel: "stages",
      satisfactionLabel: "Satisfaction client",
      resumeCta: "Télécharger le CV",
      resumeFile: "/AGOURIANE_AMR_CV_FR.pdf",
    },
    skills: {
      sectionTitle: "COMPÉTENCES",
      subtitle: "Découvrez mes compétences techniques et mon expertise",
    },
    projects: {
      sectionTitle: "PROJETS",
      livePreview: "Aperçu en direct",
      closePreview: "Fermer l'aperçu",
      interactivePreview: "Aperçu interactif en direct",
      tabSandbox: "Bac à sable de l'app",
      tabSpecs: "Spécifications hors-ligne & mobile",
      keyHighlights: "Points forts d'ingénierie",
      liveEngine: "Moteur actif",
      items: {
        gconstat: {
          title: "GConstat & My_Expert",
          subtitle:
            "Évaluation de sinistres automobiles & suite de schématisation SkiaSharp",
          description:
            "Plateforme mobile d'entreprise conçue pour les experts en sinistres et assurés. Intègre la caméra matérielle, la synchronisation SQLite offline-first et le croquis interactif de dégâts avec SkiaSharp.",
          stats: [
            { label: "Moteur de sync", value: "Offline-First" },
            { label: "Rendu graphique", value: "SkiaSharp 2D" },
            { label: "Stockage local", value: "SQLite Chiffré" },
          ],
          reportTitle: "Rapport d'accident automobile #GC-9042",
          sqliteSynced: "Synchronisé SQLite",
          selectArea:
            "Sélectionnez la zone endommagée (Simulation SkiaSharp) :",
          claimStatus: "Aperçu de l'état du sinistre",
          targetZonePrefix: "Zone ciblée :",
          metaDescription:
            "Métadonnées photo haute résolution intégrées avec coordonnées gps, horodatage et cache sqlite local.",
          cameraReady: "Caméra matérielle prête",
          policy: "Police #MA-8491",
          blueprint: "Schéma des dégâts du véhicule",
          skiaVector: "Vecteur SkiaSharp",
          impactLogged: "Impact pare-chocs avant consigné",
          photosEvidence: "4 photos de preuve",
          geotagged: "Géolocalisées & signées",
          dbStorage: "Base de données SQLite",
          pendingSync: "Synchronisation cloud en attente",
          zones: [
            "Pare-chocs avant",
            "Portière conducteur",
            "Pare-brise arrière",
            "Phare gauche",
          ],
        },
        deepleaf: {
          title: "DeepLeaf AI & Native SDKs",
          subtitle:
            "Diagnostic des cultures par edge machine learning & sdk de pont cross-platform",
          description:
            "Application de diagnostic double Flutter et React Native propulsée par des modèles TensorFlow Lite quantifiés s'exécutant sur l'appareil pour classifier instantanément les maladies végétales en moins de 20ms.",
          stats: [
            { label: "Inférence", value: "14ms Sur l'appareil" },
            { label: "Taille du modèle", value: "4.8 Mo Quantifié" },
            { label: "Précision", value: "98.4% Score F1" },
          ],
          engineTitle: "Moteur d'inférence visuelle mobile TFLite",
          latency: "Latence 14ms",
          detectedTitle:
            "Mildiou précoce de la tomate détecté (Confiance : 98.6%)",
          scanningTitle: "Analyse du feuillage en cours...",
          aiMeta:
            "Aucune connexion cloud requise. Modèle exécuté localement via des poids quantifiés tflite.",
          rescan: "Réanalyser l'échantillon",
          confidence: "Confiance 98.4%",
          disease: "Mildiou précoce (Alternaria solani)",
          offlineTiming: "Analyse hors-ligne exécutée en 14ms",
          tagInt8: "Quantification INT8",
          tagZeroNetwork: "Zéro appel réseau",
        },
        syndicflow: {
          title: "SyndicFlow & AllRestau",
          subtitle:
            "Commande mobile multi-saveurs, gestion de copropriété & moteur de reçus",
          description:
            "Application à fort trafic pour la collecte des cotisations de syndic et la prise de commande pour restaurant. Utilise une architecture MVVM épurée, des écouteurs Firebase en temps réel et la génération de reçus PDF sur l'appareil.",
          stats: [
            { label: "Architecture", value: "Clean MVVM" },
            { label: "Moteur de documents", value: "SkiaSharp PDF" },
            { label: "Latence", value: "Sous la seconde" },
          ],
          suiteTitle: "Suite multi-locataires syndic & restauration",
          realtimeCart: "Panier en temps réel",
          itemMeal: "Bol méditerranéen gourmet",
          itemFee: "Frais mensuels de syndic",
          cartQuantity: "Quantité au panier :",
          calculatedTotal: "Total calculé",
          directPdf: "Compilateur de facture PDF prêt",
          downloadInvoice: "Télécharger la facture compilée",
          alertInvoice:
            "Facture PDF générée et mise en cache dans la mémoire de l'appareil.",
          residenceTitle: "Syndic Résidence Oasis & Café",
          syndicMaintenance: "Maintenance mensuelle de syndic",
          mealVoucher: "Bon repas express #204",
          pdfReady: "Facture PDF #INV-8891 prête",
          cleanMvvm: "Architecture Clean MVVM",
        },
        telemetry: {
          title: "Enterprise APM Telemetry",
          subtitle:
            "Surveillance de santé de cluster critique & console de métriques distribuées",
          description:
            "Client d'observabilité en temps réel pour ingénieurs d'infrastructure et équipes DevOps. Intègre la télémétrie Dynatrace et les agents Zabbix avec des flux backend Spring Boot et PostgreSQL.",
          stats: [
            { label: "Disponibilité", value: "99.98% Surveillé" },
            { label: "Pipeline de données", value: "Kafka & WebSocket" },
            { label: "Nœuds de cluster", value: "24 Nœuds actifs" },
          ],
          monitorTitle: "Moniteur de nœuds de télémétrie APM",
          healthy: "99.98% En santé",
          postgresTps: "PostgreSQL TPS",
          p99Latency: "Latence P99 du nœud",
          zabbixAlerts: "Alertes Zabbix",
          optimalLoad: "Charge optimale",
          latencyTarget: "Cible sous 10ms",
          agentActive: "Agent Dynatrace v8.1 Actif",
          uptime: "99.98% Disponibilité",
        },
      },
    },
    contact: {
      sectionTitle: "ME CONTACTER",
      heading: "Informations de contact",
      subheading:
        "Vous avez un projet en tête, des questions d'architecture mobile ou souhaitez collaborer ? Contactez-moi directement pour concevoir quelque chose d'exceptionnel.",
      followMe: "Suivez-moi",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      locationValue: "Maroc",
      nameField: "Nom",
      namePlaceholder: "Votre nom",
      emailField: "Email",
      emailPlaceholder: "Votre email",
      messageField: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      submitButton: "Envoyer le message",
      sendingButton: "Envoi en cours...",
      successTitle: "Message envoyé avec succès",
      successSubtitle: "Je vous répondrai dans les plus brefs délais.",
      errorTitle: "Échec de l'envoi du message. Veuillez réessayer.",
      errorSubtitle: "Veuillez vérifier votre réseau ou réessayer plus tard.",
      copyright: "© 2026 Amr Agouriane. Tous droits réservés.",
    },
  },
  // Arabic translations dictionary with localized strings and labels.
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      projects: "المشاريع",
      contact: "تواصل معي",
    },
    hero: {
      badge: "مهندس تطبيقات الهواتف • Flutter / React Native / .NET MAUI",
      intro:
        "مطور تطبيقات هواتف متعددة المنصات متخصص في بناء تطبيقات عالية الأداء تعمل دون اتصال بالإنترنت وقابلة للتوسع على نظامي Android و iOS.",
      contactCta: "تواصل معي",
      displayName: "amr",
    },
    about: {
      sectionTitle: "نبذة عني",
      heading: "مطور تطبيقات هواتف متعددة المنصات",
      bio: "أقوم بتطوير تطبيقات هواتف حديثة وسريعة الاستجابة وعالية الأداء باستخدام Flutter و React Native و .NET MAUI. أركز على الموثوقية في العمل دون إنترنت، والتكامل المباشر مع عتاد الجهاز، وهندسة واجهات مستخدم نظيفة.",
      nameLabel: "الاسم :",
      nameValue: "عمرو أكوريان",
      locationLabel: "الموقع :",
      locationValue: "المغرب",
      projectsLabel: "مشاريع",
      internshipsLabel: "تداريب مهنية",
      satisfactionLabel: "رضا العملاء",
      resumeCta: "تحميل السيرة الذاتية",
      resumeFile: "/AGOURIANE_AMR_CV_FR.pdf",
    },
    skills: {
      sectionTitle: "المهارات التقنية",
      subtitle: "استكشف أبرز المهارات التقنية والخبرات العملية",
    },
    projects: {
      sectionTitle: "المشاريع",
      livePreview: "معاينة مباشرة",
      closePreview: "إغلاق المعاينة",
      interactivePreview: "معاينة تفاعلية حية",
      tabSandbox: "بيئة تجربة التطبيق",
      tabSpecs: "المواصفات التقنية والموبايل",
      keyHighlights: "أبرز الإنجازات الهندسية",
      liveEngine: "المحرك قيد التشغيل",
      items: {
        gconstat: {
          title: "GConstat & My_Expert",
          subtitle:
            "تقييم مطالبات التأمين على السيارات مع مجموعة مخططات SkiaSharp",
          description:
            "منصة هواتف مؤسسية موجهة لخبراء تسوية الحوادث وحاملي وثائق التأمين. تتميز بالتكامل مع كاميرا الجهاز، والمزامنة بالاعتماد أولاً على التخزين المحلي عبر SQLite، ورسم تفاعلي لمخططات أضرار المركبات باستخدام SkiaSharp.",
          stats: [
            { label: "محرك المزامنة", value: "Offline-First" },
            { label: "محرك الرسم", value: "SkiaSharp 2D" },
            { label: "التخزين المحلي", value: "SQLite مشفر" },
          ],
          reportTitle: "تقرير حادث سير #GC-9042",
          sqliteSynced: "متزامن مع SQLite",
          selectArea:
            "اختر منطقة الضرر (محاكاة لوحة SkiaSharp):",
          claimStatus: "معاينة حالة المطالبة",
          targetZonePrefix: "المنطقة المستهدفة :",
          metaDescription:
            "بيانات الصور عالية الدقة مدمجة بإحداثيات نظام تحديد المواقع، والطابع الزمني، وتخزين SQLite المؤقت.",
          cameraReady: "كاميرا العتاد جاهزة",
          policy: "وثيقة #MA-8491",
          blueprint: "مخطط أضرار المركبة",
          skiaVector: "SkiaSharp Vector",
          impactLogged: "تم تسجيل صدمة المصد الأمامي",
          photosEvidence: "4 صور إثباتية",
          geotagged: "محددة جغرافياً وموقعة",
          dbStorage: "قاعدة بيانات SQLite",
          pendingSync: "بانتظار المزامنة السحابية",
          zones: [
            "المصد الأمامي",
            "باب السائق",
            "الزجاج الخلفي",
            "المصباح الأيسر",
          ],
        },
        deepleaf: {
          title: "DeepLeaf AI & Native SDKs",
          subtitle:
            "تشخيص أمراض المحاصيل عبر الذكاء الاصطناعي على الحافة مع حزم SDK مخصصة",
          description:
            "تطبيق تشخيصي مزدوج تم تطويره بـ Flutter و React Native ومدعوم بنماذج TensorFlow Lite المكممة التي تعمل مباشرة على معالجات الأجهزة لتصنيف فوري لأمراض النباتات في وضع عدم الاتصال بزمن استجابة أقل من 20 مللي ثانية.",
          stats: [
            { label: "سرعة المعالجة", value: "14ms على الجهاز" },
            { label: "حجم النموذج", value: "4.8 ميجابايت" },
            { label: "الدقة", value: "98.4% مقياس F1" },
          ],
          engineTitle: "محرك استنتاج الرؤية المحمولة TFLite",
          latency: "زمن استجابة 14ms",
          detectedTitle: "تم رصد اللفحة المبكرة للطماطم (نسبة التأكد: 98.6%)",
          scanningTitle: "جاري مسح أوراق المحصول...",
          aiMeta:
            "لا يتطلب اتصالاً سحابياً. يتم تشغيل النموذج محلياً عبر أوزان tflite مكممة.",
          rescan: "إعادة مسح العينة",
          confidence: "نسبة ثقة 98.4%",
          disease: "اللفحة المبكرة (Alternaria solani)",
          offlineTiming: "تحليل محلي نُفّذ خلال 14 مللي ثانية",
          tagInt8: "تكميم INT8",
          tagZeroNetwork: "صفر اتصالات شبكية",
        },
        syndicflow: {
          title: "SyndicFlow & AllRestau",
          subtitle:
            "تطبيق طلبات متعدد النكهات وإدارة العقارات المشتركة مع محرك الفواتير",
          description:
            "تطبيق لمعالجة مدفوعات اتحاد الملاك وإدارة طلبات نقاط البيع للمطاعم بحجم معاملات كبير. يعتمد على بنية MVVM نظيفة ومستمعين لحظيين من Firebase وتوليد مباشر لملفات PDF على الجهاز.",
          stats: [
            { label: "المعمارية", value: "Clean MVVM" },
            { label: "محرك المستندات", value: "SkiaSharp PDF" },
            { label: "زمن الاستجابة", value: "لحظي أقل من ثانية" },
          ],
          suiteTitle: "حزمة اتحاد الملاك والمطاعم متعددة المستأجرين",
          realtimeCart: "سلة لحظية",
          itemMeal: "وجبة البحر المتوسط الفاخرة",
          itemFee: "واجبات اتحاد الملاك الشهرية",
          cartQuantity: "كمية السلة:",
          calculatedTotal: "المجموع المحسوب",
          directPdf: "محول فواتير PDF مباشر جاهز",
          downloadInvoice: "تحميل الفاتورة المنشأة",
          alertInvoice: "تم إنشاء فاتورة PDF وتخزينها في ذاكرة الجهاز.",
          residenceTitle: "سنديك إقامة الواحة ومقهى",
          syndicMaintenance: "صيانة اتحاد الملاك الشهرية",
          mealVoucher: "قسيمة وجبة سريعة #204",
          pdfReady: "فاتورة PDF جاهزة #INV-8891",
          cleanMvvm: "معمارية MVVM نظيفة",
        },
        telemetry: {
          title: "Enterprise APM Telemetry",
          subtitle:
            "مراقبة صحة الخوادم الحرجة ولوحة تحكم متقدمة للمقاييس الموزعة",
          description:
            "عميل مراقبة ورؤية لحظية لمهندسي البنية التحتية وفرق DevOps. يدمج قياسات Dynatrace ووكلاء Zabbix مع خدمات Spring Boot وقواعد بيانات PostgreSQL.",
          stats: [
            { label: "الجاهزية", value: "99.98% قيد المراقبة" },
            { label: "خط معالجة البيانات", value: "Kafka & WebSocket" },
            { label: "عقد الخوادم", value: "24 خادماً نشطاً" },
          ],
          monitorTitle: "مراقب عقد قياس الأداء APM",
          healthy: "99.98% جاهزية مثالية",
          postgresTps: "معاملات بوستجريس في الثانية",
          p99Latency: "زمن استجابة P99",
          zabbixAlerts: "تنبيهات زابيكس",
          optimalLoad: "حمل تشغيلي مثالي",
          latencyTarget: "الهدف أقل من 10ms",
          agentActive: "وكيل Dynatrace v8.1 نشط",
          uptime: "99.98% جاهزية",
        },
      },
    },
    contact: {
      sectionTitle: "تواصل معي",
      heading: "معلومات التواصل",
      subheading:
        "سواء كنت بحاجة لتطوير تطبيقات هواتف عالية الأداء تعمل دون اتصال بالإنترنت باستخدام Flutter أو React Native أو .NET MAUI، يسعدني تواصلك المباشر.",
      followMe: "تابعني",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      locationLabel: "الموقع",
      locationValue: "المغرب",
      nameField: "الاسم",
      namePlaceholder: "اسمك الكامل",
      emailField: "البريد الإلكتروني",
      emailPlaceholder: "بريدك الإلكتروني",
      messageField: "الرسالة",
      messagePlaceholder: "حدثني عن مشروعك...",
      submitButton: "إرسال الرسالة",
      sendingButton: "جاري الإرسال...",
      successTitle: "تم إرسال الرسالة بنجاح",
      successSubtitle: "سأقوم بالرد عليك في أقرب وقت ممكن.",
      errorTitle: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      errorSubtitle: "يرجى التحقق من اتصالك بالإنترنت أو إعادة المحاولة لاحقاً.",
      copyright: "© 2026 عمرو أكوريان. جميع الحقوق محفوظة.",
    },
  },
};
