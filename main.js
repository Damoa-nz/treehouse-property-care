(function(){
  var i18n = {
    ko: {
      nav_services:"서비스", nav_cleaning:"청소", nav_outdoor:"아웃도어 관리", nav_maintenance:"부동산 유지보수",
      nav_commercial:"상업 서비스", nav_projects:"작업 사례", nav_reviews:"리뷰", nav_about:"회사 소개",
      nav_contact:"문의하기", nav_quote_btn:"무료 견적 받기",
      hero_eyebrow:"오클랜드 전역 서비스", hero_h1:"당신의 부동산을 세심하게 관리합니다.",
      hero_lede:"청소, 아웃도어 관리, 유지보수까지 — 하나의 신뢰할 수 있는 팀이 함께합니다.",
      hero_cta:"무료 견적 받기", hero_cta2:"서비스 둘러보기", hero_subnote:"콜센터 없이, 실제 담당자와 직접 소통합니다.",
      trust_auckland:"오클랜드 기반", trust_insured:"완전 보험 가입", trust_res_com:"주거 · 상업 모두 가능", trust_direct:"콜센터 없이 직접 응대",
      why_eyebrow:"트리하우스를 선택하는 이유", why_h2:"부동산 관리를 다르게 생각합니다.",
      why1_title:"부동산 전체를 위한 관리", why1_desc:"개별 작업이 아니라 부동산 전체를 위해 관리합니다.",
      why2_title:"신뢰할 수 있는 서비스", why2_desc:"명확한 소통, 확실한 일정, 전문적인 기준을 지킵니다.",
      why3_title:"하나의 팀", why3_desc:"청소, 아웃도어 관리, 유지보수를 한 팀이 모두 담당합니다.",
      why4_title:"품질이 중요합니다", why4_desc:"꼼꼼한 작업, 세심한 디테일, 부동산에 대한 존중을 담습니다.",
      services_eyebrow:"서비스 안내", services_h2:"부동산에 필요한 모든 것.",
      service1_cat:"청소", service1_title:"청소", service1_desc:"정기 청소, 1회성 청소, 이사 청소, 대청소까지 가정과 사업장 모두 가능합니다.",
      service2_cat:"아웃도어 관리", service2_title:"아웃도어 관리", service2_desc:"잔디 깎기, 정원 정리, 생울타리 손질, 배수구 청소, 고압 세척까지.",
      service3_cat:"부동산 유지보수", service3_title:"부동산 유지보수", service3_desc:"핸디맨 작업, 수리, 데크 관리, 펜스, 외부 유지보수까지.",
      service4_cat:"상업 서비스", service4_title:"상업 서비스", service4_desc:"정기적이고 안정적인 방문으로 사무실 · 리테일 · 상업공간 청소를 제공합니다.",
      learn_more:"자세히 보기",
      steps_eyebrow:"이용 방법", steps_h2:"간단하게, 처음부터 끝까지.",
      step1_title:"필요한 서비스를 알려주세요", step1_desc:"전화, 문자 또는 견적 요청 폼으로.",
      step2_title:"편한 시간을 조율합니다", step2_desc:"저희가 아니라, 고객님 일정에 맞춰서.",
      step3_title:"저희 팀이 직접 작업합니다", step3_desc:"처음부터 제대로.",
      step4_title:"관리된 부동산을 누리세요", step4_desc:"1회성이든 정기든, 선택은 자유입니다.",
      philosophy_eyebrow:"우리의 철학",
      philosophy_text:"부동산 관리는 사소한 일 하나하나마다 다섯 명의 업체를 상대하는 일이 아니라, 개인적이고 신뢰할 수 있고 간편해야 합니다.",
      projects_eyebrow:"작업 사례", projects_h2:"저희가 지향하는 관리의 기준.",
      projects_sub:"자체 프로젝트 갤러리가 쌓이는 동안, 저희가 지향하는 기준을 보여드리는 이미지입니다.",
      example_badge:"예시 이미지",
      project1_title:"데크 · 외부 관리", project1_cat:"부동산 유지보수",
      project2_title:"정원 관리", project2_cat:"아웃도어 관리",
      project3_title:"주거 부동산 관리", project3_cat:"정기 유지보수",
      reviews_eyebrow:"리뷰", reviews_h2:"고객님의 경험이 중요합니다.",
      reviews_text:"Tree House는 자신의 집과 부동산을 믿고 맡길 수 있는 고객 커뮤니티를 만들어가고 있습니다. 구글 리뷰는 이제 막 시작하는 단계이고, 모든 작업이 신뢰를 제대로 쌓아갈 기회라고 생각합니다.",
      reviews_cta:"문의하기",
      about_eyebrow:"회사 소개", about_h2:"당신의 부동산을 진심으로 관리하는 사람들.",
      about_p1:"Tree House는 단순한 생각에서 시작했습니다: 부동산 관리는 개인적이고, 신뢰할 수 있고, 간편해야 한다는 것. 저희는 단순히 작업 하나를 끝내는 것이 아니라, 고객과 부동산 모두와 장기적인 관계를 만들어가고자 합니다.",
      about_p2:"모든 작업은 저희 팀이 직접 수행하며, 외주를 주거나 서두르지 않습니다. 누가 부동산을 관리하는지 더 알고 싶으시다면 언제든 문의해주세요.",
      finalcta_eyebrow:"언제든 준비되어 있습니다", finalcta_h2:"이제 맡겨보세요.",
      finalcta_text:"부동산 상태와 필요하신 서비스를 알려주시면, 부담 없는 명확한 견적을 드리겠습니다.", finalcta_btn:"무료 견적 받기",
      contact_eyebrow:"무료 견적 요청", contact_h2:"모든 부동산은 다릅니다.",
      contact_text:"부동산 상태와 필요하신 서비스를 알려주세요. 고정된 가격표 없이, 명확하고 정직한 견적을 드립니다 — 같은 작업은 하나도 없기 때문입니다.",
      contact_call:"전화하기 — +64 22 408 9301", contact_location:"뉴질랜드 오클랜드",
      text_alt_title:"문자를 더 선호하시나요?", text_alt_desc:"사진, 지역, 필요하신 내용을 보내주시면 빠르고 간편하게 견적을 드립니다.", text_alt_btn:"문자 보내기",
      form_name_label:"이름", "ph_form_name_ph":"이름을 입력하세요",
      form_phone_label:"전화번호", "ph_form_phone_ph":"022 000 0000",
      form_email_label:"이메일", "ph_form_email_ph":"you@email.com",
      form_date_label:"희망 날짜", "ph_form_date_ph":"예: 3월 15일",
      form_address_label:"주소 / 지역", "ph_form_address_ph":"예: 밀포드, 오클랜드",
      form_type_label:"부동산 유형", form_type_res:"주거용", form_type_com:"상업용",
      form_service_label:"필요한 서비스", form_service_cleaning:"청소", form_service_outdoor:"아웃도어 관리",
      form_service_maintenance:"부동산 유지보수", form_service_commercial:"상업 서비스", form_service_multiple:"복수 서비스",
      form_message_label:"메시지", "ph_form_message_ph":"자세히 알려주시면 더 정확한 견적이 가능합니다",
      form_submit_btn:"무료 견적 받기", form_note:"고객님의 정보는 저희 팀에게만 전달되며, 다른 곳과 공유하지 않습니다.",
      form_sending:"전송 중…", form_error:"문제가 발생했습니다 — 전화나 문자로 직접 연락해주세요.",
      form_success_title:"감사합니다.", form_success_text:"요청을 받았습니다. 곧 연락드리겠습니다.",
      footer_services_h5:"서비스", footer_company_h5:"회사", footer_auckland_h5:"오클랜드 지사",
      footer_sydney_h5:"시드니 지사", footer_email_h5:"이메일", footer_privacy:"개인정보 처리방침",
      mobilebar_call:"전화", mobilebar_text:"문자", mobilebar_quote:"견적"
    },
    zh: {
      nav_services:"服务", nav_cleaning:"清洁", nav_outdoor:"户外养护", nav_maintenance:"房产维修保养",
      nav_commercial:"商业服务", nav_projects:"作品案例", nav_reviews:"客户评价", nav_about:"关于我们",
      nav_contact:"联系我们", nav_quote_btn:"获取免费报价",
      hero_eyebrow:"服务遍及奥克兰", hero_h1:"我们悉心打理您的房产。",
      hero_lede:"清洁、户外养护与维修保养——皆由同一支值得信赖的团队完成。",
      hero_cta:"获取免费报价", hero_cta2:"浏览我们的服务", hero_subnote:"真人对接，没有呼叫中心。",
      trust_auckland:"总部位于奥克兰", trust_insured:"保险齐全", trust_res_com:"住宅与商业均可", trust_direct:"直接沟通，无需转接",
      why_eyebrow:"为什么选择 Tree House", why_h2:"用不同的方式思考房产养护。",
      why1_title:"以房产整体为核心", why1_desc:"我们关注的不只是单项任务，而是整个房产的养护。",
      why2_title:"值得信赖的服务", why2_desc:"清晰的沟通、可靠的排期与专业的标准。",
      why3_title:"统一的团队", why3_desc:"清洁、户外养护与维修保养由同一支团队完成。",
      why4_title:"品质至上", why4_desc:"用心的工作、关注细节，尊重您的房产。",
      services_eyebrow:"我们的服务", services_h2:"满足您房产的一切需求。",
      service1_cat:"清洁", service1_title:"清洁", service1_desc:"定期清洁、单次清洁、搬家清洁与深度清洁，适用于住宅与商业空间。",
      service2_cat:"户外养护", service2_title:"户外养护", service2_desc:"割草、花园整理、绿篱修剪、排水沟清理与高压清洗。",
      service3_cat:"房产维修保养", service3_title:"房产维修保养", service3_desc:"水电杂工、维修、露台养护、围栏及外部维护。",
      service4_cat:"商业服务", service4_title:"商业服务", service4_desc:"为办公室、零售与商业空间提供稳定可靠的定期清洁服务。",
      learn_more:"了解更多",
      steps_eyebrow:"服务流程", steps_h2:"简单明了，从头到尾。",
      step1_title:"告诉我们您的需求", step1_desc:"致电、发短信或填写报价表单。",
      step2_title:"我们安排合适的时间", step2_desc:"配合您的日程，而非我们的。",
      step3_title:"我们的团队亲自完成工作", step3_desc:"一次做到位。",
      step4_title:"享受精心打理的房产", step4_desc:"单次服务或长期合作，由您决定。",
      philosophy_eyebrow:"我们的理念",
      philosophy_text:"房产养护应当是个人化、可靠且轻松的——而不是为每一件小事都要联系五个不同的师傅。",
      projects_eyebrow:"我们的作品", projects_h2:"我们坚持的养护标准。",
      projects_sub:"在我们自己的项目案例逐步积累的同时，这些图片展示了我们所秉持的标准。",
      example_badge:"示例图片",
      project1_title:"露台与外部养护", project1_cat:"房产维修保养",
      project2_title:"花园养护", project2_cat:"户外养护",
      project3_title:"住宅房产养护", project3_cat:"长期维护",
      reviews_eyebrow:"客户评价", reviews_h2:"您的体验很重要。",
      reviews_text:"Tree House 正在建立一个信任我们照料其住宅与房产的客户社区。我们在 Google 上的评价才刚刚起步——每一次服务都是我们赢得信任的机会。",
      reviews_cta:"联系我们",
      about_eyebrow:"关于我们", about_h2:"真心为您的房产着想的人。",
      about_p1:"Tree House 源于一个简单的想法：房产养护应当是个人化、可靠且轻松的。我们不只是想完成一项工作，更希望与客户及其房产建立长期的关系。",
      about_p2:"每一项工作都由我们自己的团队完成——不外包，不赶工。如果您想更多了解是谁在照料您的房产，欢迎随时联系我们。",
      finalcta_eyebrow:"随时为您服务", finalcta_h2:"交给我们来打理。",
      finalcta_text:"告诉我们您房产的情况和需求，我们会提供清晰、无需承诺的报价。", finalcta_btn:"获取免费报价",
      contact_eyebrow:"获取免费报价", contact_h2:"每个房产都不一样。",
      contact_text:"告诉我们您房产的情况和需求。我们提供清晰、诚实的报价——没有固定价目表，因为没有两项工作是完全相同的。",
      contact_call:"致电我们 — +64 22 408 9301", contact_location:"新西兰 奥克兰",
      text_alt_title:"更想发短信？", text_alt_desc:"发送照片、所在区域和需求，即可快速获得报价。", text_alt_btn:"发送短信",
      form_name_label:"姓名", "ph_form_name_ph":"请输入您的姓名",
      form_phone_label:"电话", "ph_form_phone_ph":"022 000 0000",
      form_email_label:"邮箱", "ph_form_email_ph":"you@email.com",
      form_date_label:"希望日期", "ph_form_date_ph":"例如：3月15日",
      form_address_label:"房产地址 / 区域", "ph_form_address_ph":"例如：Milford, Auckland",
      form_type_label:"房产类型", form_type_res:"住宅", form_type_com:"商业",
      form_service_label:"所需服务", form_service_cleaning:"清洁", form_service_outdoor:"户外养护",
      form_service_maintenance:"房产维修保养", form_service_commercial:"商业服务", form_service_multiple:"多项服务",
      form_message_label:"留言", "ph_form_message_ph":"提供更多细节有助于我们准确报价",
      form_submit_btn:"获取免费报价", form_note:"您的信息将直接发送给我们的团队，不会与任何第三方共享。",
      form_sending:"发送中…", form_error:"出现问题——请直接致电或发短信联系我们。",
      form_success_title:"谢谢您。", form_success_text:"我们已收到您的请求，会尽快与您联系。",
      footer_services_h5:"服务项目", footer_company_h5:"公司", footer_auckland_h5:"奥克兰分部",
      footer_sydney_h5:"悉尼分部", footer_email_h5:"邮箱", footer_privacy:"隐私政策",
      mobilebar_call:"致电", mobilebar_text:"短信", mobilebar_quote:"报价"
    }
  };

  var elCache = [];
  document.querySelectorAll('[data-i18n]').forEach(function(el){ elCache.push({el:el, key:el.getAttribute('data-i18n'), en:el.innerHTML}); });
  var phCache = [];
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){ phCache.push({el:el, key:el.getAttribute('data-i18n-ph'), en:el.getAttribute('placeholder')||''}); });

  var currentLang = localStorage.getItem('th_lang') || 'en';

  function applyLang(lang){
    elCache.forEach(function(item){
      if(lang === 'en'){ item.el.innerHTML = item.en; }
      else { item.el.innerHTML = (i18n[lang] && i18n[lang][item.key]) ? i18n[lang][item.key] : item.en; }
    });
    phCache.forEach(function(item){
      if(lang === 'en'){ item.el.setAttribute('placeholder', item.en); }
      else {
        var val = i18n[lang] && i18n[lang]['ph_'+item.key];
        item.el.setAttribute('placeholder', val || item.en);
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-lang')===lang); });
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
    localStorage.setItem('th_lang', lang);
    currentLang = lang;
  }

  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ applyLang(btn.getAttribute('data-lang')); });
  });

  applyLang(currentLang);
  window.__th_i18n = i18n;
  window.__th_get = function(key){
    if(currentLang === 'en') return null;
    return (i18n[currentLang] && i18n[currentLang][key]) || null;
  };
})();

// Mobile nav toggle
  var toggle = document.getElementById('menuToggle');
  var closeBtn = document.getElementById('menuClose');
  var mobileNav = document.getElementById('mobileNav');
  function openNav(){ mobileNav.classList.add('open'); toggle.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
  function closeNav(){ mobileNav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  toggle.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeNav); });
