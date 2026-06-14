window.NabdLegalContent = {
  privacy: {
    ar: {
      title: "سياسة الخصوصية — نبض",
      metaDescription:
        "سياسة خصوصية تطبيق نبض: الأذونات، الموقع، الصور، الإشعارات، حذف الحساب، والاحتفاظ بالبيانات.",
      pageTitle: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 12 يونيو 2026",
      effective: "سارية اعتبارًا من: مرشح الإطلاق العام",
      intro:
        "نبض («نحن»، «التطبيق») منصة بلاغات مجتمعية تربط السكان بفرق البلدية. توضّح هذه السياسة — مع أي إفصاحات داخل التطبيق — كيف نصل إلى بياناتك ونجمعها ونستخدمها ونشاركها ونحتفظ بها ونحذفها. تنطبق على تطبيق نبض على Android وiOS.",
      relatedLinks: [
        { href: "../terms/", label: "شروط الاستخدام" },
        { href: "../child-safety/", label: "معايير سلامة الأطفال" },
        { href: "../delete-account/", label: "حذف الحساب" },
      ],
      sections: [
        {
          id: "anonymous",
          title: "الإبلاغ المجهول",
          paragraphs: [
            "يمكنك استخدام نبض دون إنشاء حساب. لا تُعرض هوية مُبلِّغ مجهول علنًا على خريطة المجتمع.",
            "نربط البلاغات المجهولة بمعرّف جلسة مجهول لمنع الإساءة والاحتفاظ بسجل بلاغاتك إذا قررت لاحقًا ترقية حسابك.",
            "في إعدادات الخصوصية داخل التطبيق يمكنك التحكم في إخفاء الموقع الدقيق وفضل الإبلاغ المجهول افتراضيًا.",
          ],
        },
        {
          id: "collect",
          title: "المعلومات التي نجمعها",
          paragraphs: ["نجمع فقط ما يلزم لتشغيل منصة البلاغات المجتمعية:"],
          list: [
            "محتوى البلاغ: العنوان، الوصف، التصنيف، مستوى الخطورة، الموقع، والصور التي تختار رفعها.",
            "الموقع: إحداثيات تقريبية ودقيقة لوضع البلاغ على الخريطة.",
            "معلومات الحساب: البريد الإلكتروني وكلمة المرور إذا سجّلت حسابًا.",
            "رمز إشعار الدفع (Expo push token) إذا فعّلت تنبيهات الدفع في الإعدادات.",
            "بيانات الاستخدام والتدقيق: إجراءات الإشراف والتوجيه والمعالجة (تُسجَّل على خوادمنا بأمان، وليس في سجلات تصحيح التطبيق).",
            "تفضيلات الإشعارات والأحياء المتابَعة إذا استخدمت هذه الميزات.",
          ],
          after:
            "لا نستخدم في الإصدار الأول تحليلات استخدام (analytics) أو حزم تتبع الأعطال (crash reporting) من طرف ثالث، وفق وثائق الإطلاق الحالية.",
        },
        {
          id: "permissions",
          title: "أذونات الجهاز ومتى نطلبها",
          paragraphs: [
            "لا نطلب أي إذن عند فتح التطبيق لأول مرة. قبل كل إذن حساس، نعرض شرحًا داخل التطبيق (PermissionRationaleSheet) ثم نطلب موافقتك عبر نظام التشغيل. يمكنك الرفض والاستمرار في تصفح الخريطة.",
          ],
          list: [
            "الموقع (Location — عند الاستخدام فقط): يُطلب عند الضغط على «موقعي» لإعادة تمركز الخريطة أو عند اختيار «استخدم موقعي» أثناء إنشاء بلاغ. الغرض: وضع البلاغ في الحي الصحيح. لا نطلب الموقع في الخلفية.",
            "الصور / مكتبة الوسائط (Photos / Media library): يُطلب عند اختيارك إرفاق صور كدليل على بلاغ أو على إثبات معالجة ميداني. لا تُرفَع أي صورة حتى تُرسِل البلاغ. لا نستخدم إذن الكاميرا — التطبيق يعتمد على اختيار الصور من المعرض فقط.",
            "الإشعارات (Notifications): تُطلب فقط عند تفعيل «تنبيهات الدفع» من الإعدادات → الإشعارات. يمكنك إيقافها لاحقًا من الإعدادات أو من إعدادات النظام.",
          ],
          after:
            "لا نطلب إذن الكاميرا أو الميكروفون أو جهات الاتصال. لا توجد ميزة صورة ملف شخصي في الإصدار الحالي.",
        },
        {
          id: "use",
          title: "كيف نستخدم المعلومات",
          paragraphs: ["نستخدم البيانات من أجل:"],
          list: [
            "عرض قضايا المجتمع في حيك على الخريطة والتغذية المجتمعية.",
            "توجيه البلاغات إلى المشرفين وفرق البلدية المختصة.",
            "التحقق من البلاغات وتعيينها ومتابعة حلها.",
            "إرسال تنبيهات دفع اختيارية تتحكم بها من الإعدادات.",
            "الاحتفاظ بسجلات تدقيق آمنة للإجراءات ذات الصلاحيات.",
            "تحسين الموثوقية ومنع إساءة استخدام المنصة.",
          ],
        },
        {
          id: "location",
          title: "بيانات الموقع",
          paragraphs: [
            "نستخدم الإحداثيات لوضع بلاغك في الحي الصحيح. لا يُعرض الموقع الدقيق علنًا على خريطة المجتمع افتراضيًا؛ قد يُموَّه أو يُخفى وفق إعدادات البلاغ وملفك.",
            "قد تُشارَك الإحداثيات الدقيقة مع فرق الإصلاح والاستجابة المعيّنة عند الحاجة التشغيلية، وليس كموقع عام للمجتمع.",
            "إذا رفضت إذن الموقع، يمكنك تصفح الخريطة وتحديد موقع البلاغ يدويًا.",
          ],
        },
        {
          id: "media",
          title: "الصور والوسائط",
          paragraphs: [
            "الصور التي ترفقها تُخزَّن في تخزيننا السحابي الآمن وترتبط ببلاغك. قد تُعرض وسائط البلاغ المعتمدة لأعضاء المجتمع كدليل مدني على المشكلة أو على الحل.",
            "عند الرفع، نعيد ترميز الصور إلى JPEG ونضغطها (حد أقصى تقريبًا 1920px للعرض، و4MB). لا نحتفظ ببيانات EXIF الأصلية (مثل GPS المضمّن في الصورة) في الملفات المخزّنة.",
            "تُستخدم الوسائط للتحقق والمعالجة والشفافية المدنية، وليس للإعلان أو التسويق.",
          ],
        },
        {
          id: "push",
          title: "الإشعارات ورموز الجهاز",
          paragraphs: [
            "إذا فعّلت «تنبيهات الدفع» من الإعدادات، نخزّن رمز Expo push token مرتبطًا بحسابك لإرسال تحديثات الحالة التي اخترتها (بلاغاتك، الحلول، نشاط المجتمع، إشعارات رسمية).",
            "يمكنك إيقاف الدفع من الإعدادات؛ يُلغى الرمز عند تسجيل الخروج. لا نرسل إشعارات تسويقية.",
          ],
        },
        {
          id: "public",
          title: "البلاغات العامة",
          paragraphs: [
            "قد تكون البلاغات المجتمعية (العنوان، الوصف، التصنيف، موقع مموّه على الخريطة، والصور المعتمدة) مرئية لمستخدمين آخرين من أجل الشفافية المدنية.",
            "لا تُعرض هوية المُبلِّغ علنًا عند اختيار الإبلاغ المجهول.",
          ],
        },
        {
          id: "retention",
          title: "الاحتفاظ بالبيانات",
          paragraphs: [
            "نحتفظ بالبلاغات والوسائط المرتبطة بها ما دامت المشكلة نشطة، ولمدة معقولة بعد الحل من أجل الشفافية والتدقيق البلدي.",
            "سجلات التدقيق والعمليات البلدية التاريخية قد تُحفظ لأغراض الامتثال والسلامة التشغيلية حتى بعد حذف حسابك، دون ربطها بهويتك الشخصية.",
          ],
        },
        {
          id: "deletion",
          title: "حذف الحساب والبيانات",
          paragraphs: [
            "يمكنك حذف حسابك المسجّل في أي وقت من الإعدادات → الحساب → حذف الحساب. يتطلب تأكيدًا بكتابة عبارة DELETE MY ACCOUNT.",
            "عند الحذف: تُزال بيانات تسجيل الدخول (البريد، الملف، الإشعارات، رموز الدفع، الأحياء المتابَعة). تبقى بلاغاتك على خريطة المجتمع من أجل الشفافية المدنية لكن تُفصل عن هويتك (reporter_id = NULL).",
            "لا يمكن التراجع عن حذف الحساب. للتفاصيل الكاملة وخطوات الحذف خارج التطبيق، راجع صفحة حذف الحساب.",
          ],
          callout: {
            title: "طلب حذف الحساب",
            body: "صفحة مخصصة لطلبات حذف حساب نبد والبيانات المرتبطة به — متاحة دون تسجيل دخول:",
            link: { href: "../delete-account/", label: "حذف حساب نبض" },
          },
        },
        {
          id: "sharing",
          title: "المشاركة مع أطراف ثالثة",
          paragraphs: ["لا نبيع بياناتك الشخصية. قد تُشارك بيانات البلاغ مع:"],
          list: [
            "المشرفين المعتمدين والجهات البلدية المسؤولة عن معالجة المشكلات.",
            "مزودي الخدمات (مثل الاستضافة السحابية Supabase) بموجب عقد يلزمهم بحماية البيانات.",
          ],
          after:
            "لا نشارك بياناتك لأغراض إعلانية. لا نستخدم SDKs للإعلانات أو التتبع عبر التطبيقات.",
        },
        {
          id: "security",
          title: "الأمان والتشفير",
          paragraphs: [
            "نستخدم أمانًا على مستوى الصف (row-level security)، وضوابط وصول قائمة على الأدوار، ونقلًا مشفرًا (HTTPS/TLS) بين التطبيق وخوادمنا.",
            "لا يوجد نظام آمن بنسبة 100%. نبض ليس خدمة طوارئ — للحالات التي تهدد الحياة، استخدم قنوات الطوارئ الرسمية.",
          ],
        },
        {
          id: "children",
          title: "الأطفال",
          paragraphs: [
            "نبض غير موجّه للأطفال دون 13 عامًا. لا نجمع عن قصد بيانات شخصية من الأطفال دون هذا العمر.",
            "لمعاييرنا الصريحة ضد استغلال الأطفال وإساءة معاملتهم جنسيًا (CSAE)، راجع صفحة معايير سلامة الأطفال.",
          ],
        },
        {
          id: "rights",
          title: "حقوقك",
          paragraphs: [
            "بحسب قوانين بلدك، قد يحق لك طلب الوصول إلى بيانات حسابك أو تصحيحها أو حذفها.",
            "للدعم أو طلبات الخصوصية، تواصل مع مسؤول برنامج نبض.",
          ],
        },
        {
          id: "changes",
          title: "تحديثات هذه السياسة",
          paragraphs: [
            "قد نحدّث هذه السياسة. سنعدّل تاريخ «آخر تحديث» أعلاه. استمرارك في استخدام نبض بعد التحديث يعني موافقتك على النسخة المحدّثة.",
          ],
        },
        {
          id: "contact",
          title: "التواصل",
          paragraphs: [
            "لأسئلة الخصوصية أو طلبات البيانات، تواصل مع مسؤول برنامج نبض.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy — Nabd",
      metaDescription:
        "Nabd privacy policy: permissions, location, photos, notifications, account deletion, and data retention.",
      pageTitle: "Privacy Policy",
      lastUpdated: "Last updated: June 12, 2026",
      effective: "Effective for: Public launch candidate",
      intro:
        'Nabd ("we", "the app") is a community reporting platform connecting residents with municipal teams. This policy — together with any in-app disclosures — explains how we access, collect, use, share, retain, and delete your information. It applies to the Nabd app on Android and iOS.',
      relatedLinks: [
        { href: "../terms/", label: "Terms of Use" },
        { href: "../child-safety/", label: "Child Safety Standards" },
        { href: "../delete-account/", label: "Account Deletion" },
      ],
      sections: [
        {
          id: "anonymous",
          title: "Anonymous reporting",
          paragraphs: [
            "You may use Nabd without creating an account. Anonymous reporters are not shown publicly on the community map.",
            "We associate anonymous reports with an anonymous session identifier to prevent abuse and preserve your report history if you upgrade your account.",
            "In Privacy settings you can hide exact location and keep anonymous reporting as your default.",
          ],
        },
        {
          id: "collect",
          title: "Information we collect",
          paragraphs: ["We collect only what is needed to operate the community reporting platform:"],
          list: [
            "Report content: title, description, category, severity, location, and photos you choose to upload.",
            "Location: approximate and precise coordinates to place your report on the map.",
            "Account information: email and password if you register.",
            "Expo push notification token if you enable push alerts in Settings.",
            "Usage and audit data: moderation, dispatch, and resolution actions (logged securely on our servers, not in app debug output).",
            "Notification preferences and followed neighborhoods if you use those features.",
          ],
          after:
            "We do not use third-party analytics or crash-reporting SDKs in the first release, per current launch documentation.",
        },
        {
          id: "permissions",
          title: "Device permissions and when we request them",
          paragraphs: [
            "We do not request any permission when you first open the app. Before each sensitive permission, we show an in-app explanation (PermissionRationaleSheet), then request your consent through the operating system. You may decline and continue browsing the map.",
          ],
          list: [
            "Location (when in use only): requested when you tap to recenter the map on your location or choose \"use my location\" while creating a report. Purpose: place the report in the correct neighborhood. We do not request background location.",
            "Photos / media library: requested when you choose images to attach as report or field-resolution evidence. No photos are uploaded until you submit a report. We do not use the camera permission — the app uses gallery selection only.",
            "Notifications: requested only when you enable \"Push alerts\" under Settings → Notifications. You can disable them later in Settings or system settings.",
          ],
          after:
            "We do not request camera, microphone, or contacts permissions. Profile photo upload is not implemented in the current release.",
        },
        {
          id: "use",
          title: "How we use information",
          paragraphs: ["We use data to:"],
          list: [
            "Display community issues in your neighborhood on the map and community feed.",
            "Route reports to moderators and responsible municipal teams.",
            "Verify, assign, and resolve reported issues.",
            "Send optional push notifications you control in Settings.",
            "Maintain secure audit trails for privileged actions.",
            "Improve reliability and prevent abuse of the platform.",
          ],
        },
        {
          id: "location",
          title: "Location data",
          paragraphs: [
            "Coordinates place your report in the correct neighborhood. Exact location is not shown publicly on the community map by default; it may be blurred or hidden per report and profile settings.",
            "Exact coordinates may be shared with assigned repair and response teams when operationally required, not as a public community map pin.",
            "If you deny location permission, you can browse the map and set the report location manually.",
          ],
        },
        {
          id: "media",
          title: "Photos and media",
          paragraphs: [
            "Photos you attach are stored in our secure cloud storage and linked to your report. Approved report media may be visible to community members as civic evidence of the issue or its resolution.",
            "On upload, images are re-encoded to JPEG and compressed (approximately 1920px max width, 4MB limit). We do not retain original EXIF metadata (such as embedded GPS) in stored files.",
            "Media is used for verification, resolution, and civic transparency — not for advertising or marketing.",
          ],
        },
        {
          id: "push",
          title: "Notifications and device tokens",
          paragraphs: [
            "If you enable Push alerts in Settings, we store an Expo push token linked to your account to deliver status updates you opted into (your reports, resolutions, community activity, official notifications).",
            "You can disable push in Settings; tokens are revoked on logout. We do not send marketing notifications.",
          ],
        },
        {
          id: "public",
          title: "Public reports",
          paragraphs: [
            "Community reports (title, description, category, blurred map location, and approved photos) may be visible to other users for civic transparency.",
            "Reporter identity is not shown on public reports when you choose anonymous reporting.",
          ],
        },
        {
          id: "retention",
          title: "Data retention",
          paragraphs: [
            "Reports and associated media are retained while the issue is active and for a reasonable period after resolution for civic transparency and municipal audit.",
            "Audit logs and historical municipal operations data may be kept for compliance and operational safety even after account deletion, without linking them to your personal identity.",
          ],
        },
        {
          id: "deletion",
          title: "Account and data deletion",
          paragraphs: [
            "You can delete your registered account at any time from Settings → Account → Delete account. Confirmation requires typing DELETE MY ACCOUNT.",
            "On deletion: login data is removed (email, profile, notifications, push tokens, followed neighborhoods). Your submitted reports remain on the community map for civic transparency but are detached from your identity (reporter_id = NULL).",
            "Account deletion cannot be undone. For full steps and web-accessible deletion information, see our Account Deletion page.",
          ],
          callout: {
            title: "Request account deletion",
            body: "Dedicated page for Nabd account and associated data deletion — accessible without signing in:",
            link: { href: "../delete-account/", label: "Delete your Nabd account" },
          },
        },
        {
          id: "sharing",
          title: "Sharing with third parties",
          paragraphs: ["We do not sell your personal data. Report data may be shared with:"],
          list: [
            "Verified moderators and municipal organizations responsible for resolving issues.",
            "Service providers (such as Supabase cloud hosting) under contract to protect data.",
          ],
          after:
            "We do not share data for advertising. We do not use advertising or cross-app tracking SDKs.",
        },
        {
          id: "security",
          title: "Security and encryption",
          paragraphs: [
            "We use row-level security, role-based access controls, and encrypted transport (HTTPS/TLS) between the app and our servers.",
            "No system is 100% secure. Nabd is not an emergency service — for life-threatening situations, use official emergency channels.",
          ],
        },
        {
          id: "children",
          title: "Children",
          paragraphs: [
            "Nabd is not directed at children under 13. We do not knowingly collect personal information from children under 13.",
            "For our explicit standards against child sexual abuse and exploitation (CSAE), see our Child Safety Standards page.",
          ],
        },
        {
          id: "rights",
          title: "Your rights",
          paragraphs: [
            "Depending on your jurisdiction, you may request access, correction, or deletion of your account data.",
            "For support or privacy requests, contact your Nabd program administrator.",
          ],
        },
        {
          id: "changes",
          title: "Policy updates",
          paragraphs: [
            "We may update this policy. We will revise the \"Last updated\" date above. Continued use of Nabd after an update means you accept the revised policy.",
          ],
        },
        {
          id: "contact",
          title: "Contact",
          paragraphs: [
            "For privacy questions or data requests, contact your Nabd program administrator.",
          ],
        },
      ],
    },
  },
  terms: {
    ar: {
      title: "شروط الاستخدام — نبض",
      metaDescription:
        "شروط استخدام تطبيق نبض: القبول، الاستخدام المقبول، المحتوى المحظور، الإشراف، وسلامة الأطفال.",
      pageTitle: "شروط الاستخدام",
      lastUpdated: "آخر تحديث: 12 يونيو 2026",
      effective: "سارية اعتبارًا من: مرشح الإطلاق العام",
      intro:
        "باستخدام تطبيق نبض («نبض»، «التطبيق»، «نحن») فإنك توافق على هذه الشروط. إذا لم توافق، لا تستخدم التطبيق.",
      relatedLinks: [
        { href: "../privacy/", label: "سياسة الخصوصية" },
        { href: "../child-safety/", label: "معايير سلامة الأطفال" },
        { href: "../delete-account/", label: "حذف الحساب" },
      ],
      sections: [
        {
          id: "purpose",
          title: "الغرض",
          paragraphs: [
            "يمكّن نبض السكان من الإبلاغ عن مشكلات مجتمعية ومتابعة معالجتها. ليس نبض خدمة طوارئ. للحالات التي تهدد الحياة، تواصل مع خدمات الطوارئ المحلية.",
          ],
        },
        {
          id: "eligibility",
          title: "الأهلية",
          paragraphs: [
            "يجب أن يكون عمرك 13 عامًا على الأقل لاستخدام نبض. إذا كنت دون 13، لا تستخدم التطبيق.",
            "باستخدام نبض فإنك تؤكد أنك تبلغ 13 عامًا على الأقل أو أنك تستخدم التطبيق بإشراف ولي أمر حيث يسمح القانون بذلك.",
          ],
        },
        {
          id: "acceptable",
          title: "الاستخدام المقبول",
          paragraphs: ["توافق على:"],
          list: [
            "تقديم بلاغات دقيقة بحسن نية عن مشكلات مجتمعية حقيقية.",
            "تجنب البلاغات الكاذبة أو المكررة أو الخبيثة.",
            "عدم مضايقة مستخدمين آخرين أو موظفي البلدية أو العاملين الميدانيين.",
            "عدم محاولة تجاوز الأمان أو الوصول إلى بيانات خاصة للآخرين.",
            "استخدام الأذونات (الموقع، الصور، الإشعارات) فقط للأغراض الموضّحة في سياسة الخصوصية.",
          ],
        },
        {
          id: "prohibited",
          title: "المحتوى والسلوك المحظور",
          paragraphs: [
            "يُحظر تمامًا على نبض أي محتوى أو سلوك ينتهك القانون أو هذه الشروط، بما في ذلك على سبيل المثال لا الحصر:",
          ],
          list: [
            "مواد أو محتوى يتضمن استغلالًا جنسيًا للأطفال أو إساءة معاملة جنسية للأطفال (CSAE/CSAM) — سياسة عدم تسامح مطلق.",
            "تحميل صور أو أوصاف تحتوي على معلومات خاصة عن أفراد دون موافقتهم.",
            "محتوى عنيف أو تهديدي أو تمييزي أو تحريضي.",
            "انتحال شخصية أو انتحال هوية مؤسسة بلدية أو مشرف.",
            "محاولات اختراق أو إساءة استخدام المنصة أو إغراقها ببلاغات وهمية.",
          ],
          after:
            "لمعاييرنا الكاملة ضد CSAE وإجراءات الإنفاذ، راجع معايير سلامة الأطفال المنشورة.",
          callout: {
            title: "معايير سلامة الأطفال (CSAE)",
            body: "معاييرنا المنشورة خارجيًا ضد استغلال الأطفال وإساءة معاملتهم جنسيًا:",
            link: { href: "../child-safety/", label: "معايير سلامة الأطفال — نبض" },
          },
        },
        {
          id: "guidelines",
          title: "إرشادات المجتمع",
          paragraphs: ["توافق على:"],
          list: [
            "الإبلاغ عن مشكلات حقيقية في مجتمعك (طرق، مياه، كهرباء، نفايات، إضاءة، مخاطر).",
            "عدم تضمين معلومات خاصة عن أفراد في الصور أو الأوصاف.",
            "احترام المشرفين والعاملين الميدانيين.",
            "الإبلاغ عن محتوى مسيء عبر قنوات الإشراف أو مسؤول البرنامج.",
          ],
        },
        {
          id: "ownership",
          title: "ملكية المحتوى",
          paragraphs: [
            "تحتفظ بملكية المحتوى الذي ترسله. تمنح نبض ترخيصًا غير حصري لتخزين وعرض ومعالجة وتوزيع محتواك لغرض تتبع قضايا المجتمع وحلها والشفافية المدنية.",
          ],
        },
        {
          id: "moderation",
          title: "الإشراف",
          paragraphs: [
            "قد نراجع أو نؤكد أو نرفض أو ندمج أو نزيل بلاغات أو وسائط تخالف هذه الشروط أو القانون المعمول به.",
            "قد نوقف أو نقيّد الحسابات التي تُسيء استخدام المنصة. في حالات CSAE/CSAM المؤكدة، نزيل المحتوى فورًا ونبلّغ السلطات المختصة.",
          ],
        },
        {
          id: "disclaimer",
          title: "إخلاء المسؤولية",
          paragraphs: [
            "يُقدَّم نبض «كما هو». لا نضمن جداول الحل أو نتائج البلاغات. يربط نبض المواطنين بفرق البلدية ويعرض التقدم، دون ضمان النتائج.",
          ],
        },
        {
          id: "liability",
          title: "حدود المسؤولية",
          paragraphs: [
            "بالقدر الذي يسمح به القانون، لا يتحمل نبض ومشغّلوه مسؤولية الأضرار غير المباشرة الناشئة عن استخدام التطبيق.",
          ],
        },
        {
          id: "changes",
          title: "التغييرات",
          paragraphs: [
            "قد نحدّث هذه الشروط. استمرارك في الاستخدام بعد التغييرات يعني موافقتك عليها.",
          ],
        },
        {
          id: "contact",
          title: "التواصل",
          paragraphs: [
            "لأسئلة الشروط، تواصل مع مسؤول برنامج نبض.",
          ],
        },
      ],
    },
    en: {
      title: "Terms of Use — Nabd",
      metaDescription:
        "Nabd terms of use: acceptance, acceptable use, prohibited content, moderation, and child safety.",
      pageTitle: "Terms of Use",
      lastUpdated: "Last updated: June 12, 2026",
      effective: "Effective for: Public launch candidate",
      intro:
        'By using the Nabd app ("Nabd", "the app", "we"), you agree to these Terms of Use. If you do not agree, do not use the app.',
      relatedLinks: [
        { href: "../privacy/", label: "Privacy Policy" },
        { href: "../child-safety/", label: "Child Safety Standards" },
        { href: "../delete-account/", label: "Account Deletion" },
      ],
      sections: [
        {
          id: "purpose",
          title: "Purpose",
          paragraphs: [
            "Nabd enables residents to report community issues and track their resolution. Nabd is not an emergency service. For life-threatening situations, contact local emergency services.",
          ],
        },
        {
          id: "eligibility",
          title: "Eligibility",
          paragraphs: [
            "You must be at least 13 years old to use Nabd. If you are under 13, do not use the app.",
            "By using Nabd you confirm you are at least 13 or use the app under parental supervision where permitted by law.",
          ],
        },
        {
          id: "acceptable",
          title: "Acceptable use",
          paragraphs: ["You agree to:"],
          list: [
            "Submit accurate, good-faith reports about real community issues.",
            "Avoid false, duplicate, or malicious submissions.",
            "Not harass other users, municipal staff, or field workers.",
            "Not attempt to bypass security or access others' private data.",
            "Use permissions (location, photos, notifications) only for the purposes described in our Privacy Policy.",
          ],
        },
        {
          id: "prohibited",
          title: "Prohibited content and conduct",
          paragraphs: [
            "The following are strictly prohibited on Nabd, including but not limited to:",
          ],
          list: [
            "Child sexual abuse and exploitation material (CSAE/CSAM) — zero tolerance.",
            "Uploading photos or descriptions containing private information about individuals without consent.",
            "Violent, threatening, discriminatory, or inciting content.",
            "Impersonation of individuals, municipal staff, or moderators.",
            "Attempts to hack, abuse, or flood the platform with fake reports.",
          ],
          after:
            "For our full CSAE standards and enforcement procedures, see our published Child Safety Standards.",
          callout: {
            title: "Child Safety Standards (CSAE)",
            body: "Our externally published standards against child sexual abuse and exploitation:",
            link: { href: "../child-safety/", label: "Nabd Child Safety Standards" },
          },
        },
        {
          id: "guidelines",
          title: "Community guidelines",
          paragraphs: ["You agree to:"],
          list: [
            "Report real issues in your community (roads, water, electricity, waste, lighting, hazards).",
            "Not include private information about individuals in photos or descriptions.",
            "Respect moderators and field workers.",
            "Report abusive content through moderation channels or your program administrator.",
          ],
        },
        {
          id: "ownership",
          title: "Content ownership",
          paragraphs: [
            "You retain ownership of content you submit. You grant Nabd a non-exclusive license to store, display, process, and distribute your content for community issue tracking, resolution, and civic transparency.",
          ],
        },
        {
          id: "moderation",
          title: "Moderation",
          paragraphs: [
            "We may review, confirm, reject, merge, or remove reports or media that violate these terms or applicable law.",
            "We may suspend or restrict accounts that abuse the platform. For confirmed CSAE/CSAM, we remove content immediately and report to competent authorities.",
          ],
        },
        {
          id: "disclaimer",
          title: "Disclaimer",
          paragraphs: [
            'Nabd is provided "as is". We do not guarantee resolution timelines or outcomes. Nabd connects citizens with municipal teams and shows progress but does not guarantee results.',
          ],
        },
        {
          id: "liability",
          title: "Limitation of liability",
          paragraphs: [
            "To the extent permitted by law, Nabd and its operators are not liable for indirect damages arising from use of the app.",
          ],
        },
        {
          id: "changes",
          title: "Changes",
          paragraphs: [
            "We may update these terms. Continued use after changes constitutes acceptance.",
          ],
        },
        {
          id: "contact",
          title: "Contact",
          paragraphs: [
            "For terms questions, contact your Nabd program administrator.",
          ],
        },
      ],
    },
  },
  childSafety: {
    ar: {
      title: "معايير سلامة الأطفال — نبض",
      metaDescription:
        "معايير نبض المنشورة ضد استغلال الأطفال وإساءة معاملتهم جنسيًا (CSAE) — سياسة عدم تسامح، الإبلاغ، والإنفاذ.",
      pageTitle: "معايير سلامة الأطفال",
      lastUpdated: "آخر تحديث: 12 يونيو 2026",
      effective: "معايير منشورة خارجيًا — مطلوبة من Google Play",
      intro:
        "تطبيق نبض («نبض») منصة بلاغات مجتمعية. هذه المعايير المنشورة خارجيًا توضّح التزامنا الصريح بمنع استغلال الأطفال وإساءة معاملتهم جنسيًا (Child Sexual Abuse and Exploitation — CSAE)، بما في ذلك مواد الاعتداء الجنسي على الأطفال (CSAM).",
      relatedLinks: [
        { href: "../privacy/", label: "سياسة الخصوصية" },
        { href: "../terms/", label: "شروط الاستخدام" },
      ],
      sections: [
        {
          id: "commitment",
          title: "التزامنا",
          paragraphs: [
            "نبض لديه سياسة عدم تسامح مطلق مع أي محتوى أو سلوك يتعلق باستغلال الأطفال جنسيًا أو إساءة معاملتهم.",
            "لا يجوز للمستخدمين إنشاء أو تحميل أو توزيع أو تسهيل أي محتوى من هذا النوع على نبض.",
          ],
        },
        {
          id: "prohibited",
          title: "ما هو محظور",
          paragraphs: ["يُحظر على نبض، دون استثناء:"],
          list: [
            "أي مواد أو صور أو أوصاف أو روابط تتضمن CSAE أو CSAM.",
            "أي grooming أو استدراج أو استغلال للقاصرين.",
            "محتوى يعرّض قاصرًا للخطر أو يستغل ضعفه.",
            "أي محاولة لاستخدام نبض لنقل أو تخزين أو إخفاء محتوى يتعلق باستغلال الأطفال.",
          ],
        },
        {
          id: "age",
          title: "الفئة العمرية",
          paragraphs: [
            "نبض غير موجّه للأطفال دون 13 عامًا. الحد الأدنى للعمر 13 سنة، وفق إعلان الجمهور المستهدف في Google Play.",
            "إذا علمنا أن مستخدمًا دون 13 أنشأ حسابًا، سنتخذ خطوات لحذف الحساب والبيانات المرتبطة به.",
          ],
        },
        {
          id: "detection",
          title: "الاكتشاف والإشراف",
          paragraphs: [
            "يراجع المشرفون المعتمدون البلاغات والوسائط قبل أو بعد النشر وفق سير عمل نبض.",
            "قد نزيل أو نرفض أو نحجب أي محتوى يخالف هذه المعايير دون إشعار مسبق.",
            "نحتفظ بسجلات تدقيق للإجراءات ذات الصلاحيات المتعلقة بالإشراف.",
          ],
        },
        {
          id: "reporting",
          title: "الإبلاغ من المستخدمين",
          paragraphs: [
            "إذا رأيت محتوى يشتبه في أنه يتضمن CSAE أو يعرّض طفلًا للخطر:",
          ],
          steps: [
            "لا تشارك المحتوى أو تعيد نشره.",
            "أبلغ مشرف نبض أو مسؤول برنامج نبض فورًا.",
            "إذا كان طفلًا في خطر فوري، اتصل بخدمات الطوارئ المحلية أولًا.",
          ],
        },
        {
          id: "enforcement",
          title: "الإنفاذ",
          paragraphs: [
            "عند تأكيد CSAE/CSAM: نزيل المحتوى فورًا، ونوقف أو نحذف الحسابات المرتبطة، ونحتفظ بالسجلات اللازمة للتحقيق.",
            "نبلّغ السلطات المختصة — بما في ذلك، حيث ينطبق، المركز الوطني للأطفال المفقودين والمستغَلين (NCMEC) أو السلطة الإقليمية المناسبة — وفق القانون.",
          ],
        },
        {
          id: "google",
          title: "Google Play والامتثال",
          paragraphs: [
            "تُنشر هذه المعايير على عنوان URL عام وغير محجوب جغرافيًا لتلبية متطلبات Google Play.",
            "نوفر نقطة اتصال مخصصة لسلامة الأطفال لاستقبال إشعارات Google Play المتعلقة بمحتوى CSAE.",
          ],
        },
        {
          id: "contact",
          title: "نقطة اتصال سلامة الأطفال",
          paragraphs: [
            "مسؤول برنامج نبض هو نقطة الاتصال المخصصة لمسائل سلامة الأطفال وCSAE. يمكنه الرد على إجراءات الإنفاذ والمراجعة واتخاذ الإجراءات عند الحاجة.",
            "للإبلاغ عن محتوى CSAE على نبض، تواصل مع مسؤول برنامج نبض.",
          ],
        },
      ],
    },
    en: {
      title: "Child Safety Standards — Nabd",
      metaDescription:
        "Nabd published standards against child sexual abuse and exploitation (CSAE) — zero tolerance, reporting, and enforcement.",
      pageTitle: "Child Safety Standards",
      lastUpdated: "Last updated: June 12, 2026",
      effective: "Externally published standards — Google Play requirement",
      intro:
        'The Nabd app ("Nabd") is a community reporting platform. These externally published standards state our explicit commitment to preventing child sexual abuse and exploitation (CSAE), including child sexual abuse material (CSAM).',
      relatedLinks: [
        { href: "../privacy/", label: "Privacy Policy" },
        { href: "../terms/", label: "Terms of Use" },
      ],
      sections: [
        {
          id: "commitment",
          title: "Our commitment",
          paragraphs: [
            "Nabd has a zero-tolerance policy for any content or conduct related to child sexual abuse and exploitation.",
            "Users may not create, upload, distribute, or facilitate such content on Nabd.",
          ],
        },
        {
          id: "prohibited",
          title: "What is prohibited",
          paragraphs: ["The following are strictly prohibited on Nabd:"],
          list: [
            "Any material, images, descriptions, or links involving CSAE or CSAM.",
            "Grooming, solicitation, or exploitation of minors.",
            "Content that endangers or exploits a minor.",
            "Any attempt to use Nabd to transmit, store, or conceal child exploitation content.",
          ],
        },
        {
          id: "age",
          title: "Age requirements",
          paragraphs: [
            "Nabd is not directed at children under 13. Minimum age is 13, consistent with our Google Play target audience declaration.",
            "If we learn a user under 13 created an account, we will take steps to delete the account and associated data.",
          ],
        },
        {
          id: "detection",
          title: "Detection and moderation",
          paragraphs: [
            "Verified moderators review reports and media before or after publication per Nabd workflow.",
            "We may remove, reject, or restrict any content that violates these standards without prior notice.",
            "We maintain audit logs for privileged moderation actions.",
          ],
        },
        {
          id: "reporting",
          title: "Reporting by users",
          paragraphs: [
            "If you see content you believe involves CSAE or puts a child at risk:",
          ],
          steps: [
            "Do not share or repost the content.",
            "Report it immediately to a Nabd moderator or your Nabd program administrator.",
            "If a child is in immediate danger, contact local emergency services first.",
          ],
        },
        {
          id: "enforcement",
          title: "Enforcement",
          paragraphs: [
            "When CSAE/CSAM is confirmed: we remove content immediately, suspend or delete associated accounts, and preserve records needed for investigation.",
            "We report to competent authorities — including, where applicable, the National Center for Missing & Exploited Children (NCMEC) or the appropriate regional authority — as required by law.",
          ],
        },
        {
          id: "google",
          title: "Google Play compliance",
          paragraphs: [
            "These standards are published at a public, non-geofenced URL to meet Google Play requirements.",
            "We provide a dedicated child safety point of contact to receive Google Play notifications about CSAE content.",
          ],
        },
        {
          id: "contact",
          title: "Child safety point of contact",
          paragraphs: [
            "Your Nabd program administrator is the designated child safety point of contact for CSAE matters. They can respond to enforcement and review procedures and take action when required.",
            "To report CSAE content on Nabd, contact your Nabd program administrator.",
          ],
        },
      ],
    },
  },
  accountDeletion: {
    ar: {
      title: "حذف حساب نبض — نبض",
      metaDescription:
        "كيفية حذف حساب نبض والبيانات المرتبطة به — متطلبات Google Play لحذف الحساب.",
      pageTitle: "حذف حساب نبض",
      lastUpdated: "آخر تحديث: 12 يونيو 2026",
      effective: "تطبيق نبض — com.nabd.app",
      intro:
        "تطبيق نبض («نبض») يتيح للمستخدمين المسجّلين حذف حساباتهم والبيانات الشخصية المرتبطة بها. هذه الصفحة تلبي متطلبات Google Play لتوفير مسار واضح لحذف الحساب دون الحاجة إلى تثبيت التطبيق أو تسجيل الدخول على الويب.",
      relatedLinks: [
        { href: "../privacy/", label: "سياسة الخصوصية" },
      ],
      sections: [
        {
          id: "delete-account",
          title: "حذف حسابك داخل التطبيق",
          paragraphs: [
            "إذا كان لديك حساب مسجّل في نبض، يمكنك حذفه مباشرة من التطبيق:",
          ],
          steps: [
            "افتح تطبيق نبض وسجّل الدخول إلى حسابك.",
            "انتقل إلى الإعدادات → الحساب.",
            "اضغط «حذف الحساب» واقرأ ما سيُحذف وما سيُحتفَظ به.",
            "اضغط «متابعة»، ثم اكتب DELETE MY ACCOUNT للتأكيد.",
            "اضغط «حذف حسابي». سيتم تسجيل خروجك وإنشاء جلسة مجهولة جديدة.",
          ],
          callout: {
            title: "لا يمكن التراجع",
            body: "حذف الحساب نهائي. لا يمكن استعادة بريدك الإلكتروني أو ملفك بعد الحذف.",
          },
        },
        {
          id: "who",
          title: "من يمكنه الحذف",
          paragraphs: [
            "حذف الحساب متاح للمستخدمين المسجّلين (حساب بريد إلكتروني وكلمة مرور).",
            "إذا كنت تستخدم نبض دون تسجيل (جلسة مجهولة)، فلا يوجد حساب لحذفه — لا تُخزَّن بيانات تسجيل دخول.",
          ],
        },
        {
          id: "deleted",
          title: "ما الذي يُحذف",
          paragraphs: ["عند حذف حسابك المسجّل، نزيل:"],
          list: [
            "حساب تسجيل الدخول (auth.users) — البريد الإلكتروني وكلمة المرور.",
            "ملفك الشخصي (profiles).",
            "إشعاراتك (notifications).",
            "رموز إشعار الدفع (device_tokens).",
            "تفضيلات الإشعارات (notification_preferences).",
            "الأحياء التي تتابعها (followed_neighborhoods).",
          ],
        },
        {
          id: "retained",
          title: "ما الذي يُحتفَظ به",
          paragraphs: [
            "للشفافية المدنية، تبقى بلاغاتك على خريطة المجتمع لكن تُفصل عن هويتك (reporter_id = NULL).",
            "وسائط البلاغ (report_media) تبقى كدليل عام على المشكلة.",
            "سجلات التدقيق (audit_logs) وسجل العمليات البلدية قد تُحتفَظ لأغراض الامتثال دون ربطها ببياناتك الشخصية.",
          ],
        },
        {
          id: "web-request",
          title: "طلب الحذف دون الوصول إلى التطبيق",
          paragraphs: [
            "إذا حذفت التطبيق أو لا تستطيع تسجيل الدخول، يمكنك طلب حذف حسابك بالتواصل مع مسؤول برنامج نبض.",
            "قد نطلب التحقق من ملكية الحساب (مثل البريد الإلكتروني المسجّل) قبل تنفيذ الحذف.",
          ],
        },
        {
          id: "timing",
          title: "متى يتم الحذف",
          paragraphs: [
            "الحذف من داخل التطبيق فوري عند تأكيد العبارة DELETE MY ACCOUNT.",
            "طلبات الحذف عبر مسؤول البرنامج تُعالَج في أقرب وقت ممكن بعد التحقق.",
          ],
        },
        {
          id: "contact",
          title: "التواصل",
          paragraphs: [
            "لطلبات حذف الحساب أو أسئلة حول البيانات المحذوفة، تواصل مع مسؤول برنامج نبض.",
          ],
        },
      ],
    },
    en: {
      title: "Delete your Nabd account — Nabd",
      metaDescription:
        "How to delete your Nabd account and associated data — Google Play account deletion requirement.",
      pageTitle: "Delete your Nabd account",
      lastUpdated: "Last updated: June 12, 2026",
      effective: "Nabd app — com.nabd.app",
      intro:
        'The Nabd app ("Nabd") lets registered users delete their accounts and associated personal data. This page meets Google Play\'s requirement for a clear account deletion path without requiring app installation or web sign-in.',
      relatedLinks: [
        { href: "../privacy/", label: "Privacy Policy" },
      ],
      sections: [
        {
          id: "delete-account",
          title: "Delete your account in the app",
          paragraphs: [
            "If you have a registered Nabd account, you can delete it directly in the app:",
          ],
          steps: [
            "Open the Nabd app and sign in to your account.",
            "Go to Settings → Account.",
            "Tap Delete account and read what will be deleted and what will be kept.",
            "Tap Continue, then type DELETE MY ACCOUNT to confirm.",
            "Tap Delete my account. You will be signed out and a new anonymous session will start.",
          ],
          callout: {
            title: "Cannot be undone",
            body: "Account deletion is permanent. Your email and profile cannot be restored after deletion.",
          },
        },
        {
          id: "who",
          title: "Who can delete",
          paragraphs: [
            "Account deletion is available for registered users (email and password account).",
            "If you use Nabd without registering (anonymous session), there is no account to delete — no login credentials are stored.",
          ],
        },
        {
          id: "deleted",
          title: "What is deleted",
          paragraphs: ["When you delete your registered account, we remove:"],
          list: [
            "Login account (auth.users) — email and password.",
            "Your profile (profiles).",
            "Your notifications (notifications).",
            "Push notification tokens (device_tokens).",
            "Notification preferences (notification_preferences).",
            "Followed neighborhoods (followed_neighborhoods).",
          ],
        },
        {
          id: "retained",
          title: "What is retained",
          paragraphs: [
            "For civic transparency, your submitted reports remain on the community map but are detached from your identity (reporter_id = NULL).",
            "Report media (report_media) remains as public evidence of the issue.",
            "Audit logs and municipal operations history may be kept for compliance without linking to your personal data.",
          ],
        },
        {
          id: "web-request",
          title: "Request deletion without app access",
          paragraphs: [
            "If you uninstalled the app or cannot sign in, you may request account deletion by contacting your Nabd program administrator.",
            "We may verify account ownership (such as your registered email) before processing deletion.",
          ],
        },
        {
          id: "timing",
          title: "When deletion happens",
          paragraphs: [
            "In-app deletion is immediate once you confirm by typing DELETE MY ACCOUNT.",
            "Deletion requests via your program administrator are processed as soon as possible after verification.",
          ],
        },
        {
          id: "contact",
          title: "Contact",
          paragraphs: [
            "For account deletion requests or questions about deleted data, contact your Nabd program administrator.",
          ],
        },
      ],
    },
  },
};
