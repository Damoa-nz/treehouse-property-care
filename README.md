# Tree House Property Care — 웹사이트

프리미엄 뉴질랜드 부동산 관리 회사 홈페이지. 순수 HTML/CSS/JS로, 빌드 과정 없이 바로 배포 가능합니다.

## 파일 구조

```
index.html                  홈페이지
cleaning.html                청소 서비스 상세 페이지
outdoor-care.html            아웃도어 관리 서비스 상세 페이지
property-maintenance.html    부동산 유지보수 서비스 상세 페이지
commercial.html               상업 서비스 상세 페이지
style.css                    전체 페이지 공용 스타일시트
main.js                       다국어 전환 + 모바일 메뉴 (전 페이지 공용)
sitemap.xml                   검색엔진용 사이트맵
robots.txt                    검색엔진 크롤링 허용 설정
logo-icon.png                 파비콘 · 소셜 공유용
logo-header.png               헤더 · 푸터 로고
```

**5개 페이지가 CSS/JS를 공유하는 구조**입니다. 디자인이나 언어 전환 로직을 바꾸고 싶으면 `style.css` 또는 `main.js` 하나만 고치면 5개 페이지에 전부 반영됩니다.

## 이번 작업으로 완료된 것

- ✅ **4개 서비스 상세 페이지 신규 제작** — 각 페이지마다 고유한 소개글, 작업 범위, 카테고리, 선택 이유, 적합한 부동산 유형, FAQ 3개, 최종 CTA로 구성. 홈페이지의 "Learn More"가 이제 각 페이지로 실제 연결됩니다 (이전엔 전부 문의 폼으로만 연결됐었습니다).
- ✅ **CSS/JS 외부 파일 분리** — 페이지가 5개로 늘어난 시점에 인라인 방식은 유지보수가 어려워, `style.css`와 `main.js`로 분리했습니다.
- ✅ **Why Tree House 섹션 신규 추가** (홈페이지, How It Works 다음)
- ✅ **히어로 보조 CTA "Explore Our Services" 추가**
- ✅ **견적 폼 스팸 방지용 허니팟 필드 추가**
- ✅ 헤더 드롭다운·모바일 메뉴·푸터의 서비스 링크를 전부 실제 페이지로 연결
- ✅ sitemap.xml을 5개 페이지 전부 포함하도록 갱신

## 다국어 지원 (EN / 한국어 / 中文) — 범위 안내

헤더의 언어 전환 버튼은 **5개 페이지 모두에 있고, 공용 네비게이션·푸터·CTA 문구는 전부 3개 국어로 번역되어 있습니다.**

다만 **4개 서비스 상세 페이지의 본문(히어로 문구, 소개글, 작업 범위, FAQ 등)은 이번 단계에서는 영어로만 작성**했습니다. 번역 품질을 지키려면 한 번에 두 언어씩 300개 넘는 문장을 새로 작성해야 해서, 페이지 구조와 콘텐츠를 먼저 확정한 뒤 번역을 얹는 순서가 더 안전하다고 판단했습니다. 내용에 변경 없이 확정되면, 이어서 번역을 채워드릴 수 있습니다.

## 배포 전 반드시 해야 할 것 — 견적 폼 활성화

견적 폼은 [FormSubmit.co](https://formsubmit.co)를 통해 `treehousenz9@gmail.com`으로 전송되도록 연결되어 있습니다 (폼은 `index.html`에만 있고, 서비스 페이지의 "Get a Free Quote"는 이 폼이 있는 `index.html#contact`로 이동합니다).

1. 사이트를 배포한 뒤, 견적 폼을 한 번 실제로 제출해보세요.
2. `treehousenz9@gmail.com`으로 오는 FormSubmit 확인 이메일의 활성화 링크를 클릭하세요.
3. 이후 제출부터는 페이지 이동 없이 "Thank you" 메시지가 뜨고 이메일로 문의 내용이 도착합니다.

## GitHub Pages로 배포하기

1. 모든 `.html` 파일, `sitemap.xml`, `robots.txt`를 저장소에 업로드합니다 (폴더 없이 파일만 있는 구조라 전체 선택 후 끌어다 놓으면 됩니다).
2. 저장소 **Settings → Pages**에서 Branch를 `main`, 폴더는 `/ (root)`로 설정합니다.
3. 배포되면 `https://[사용자명].github.io/[저장소명]/` 주소로 접속됩니다.
4. **커스텀 도메인을 쓰신다면** 5개 HTML 파일 안의 `<link rel="canonical">`, `<meta property="og:...">`와 `sitemap.xml`, `robots.txt`의 `treehouse-property-care.vercel.app`를 실제 도메인으로 바꿔주세요.

## 배포 후 체크리스트

- [ ] 견적 폼 FormSubmit 활성화 (위 안내 참고)
- [ ] 각 페이지의 canonical/OG 도메인 주소를 실제 도메인으로 교체
- [ ] 서비스 페이지 히어로 이미지 5장은 전부 Unsplash 무료 라이선스 임시 이미지입니다 (`cleaning.html`, `outdoor-care.html`, `property-maintenance.html`, `commercial.html`, `index.html` 각 히어로/서비스 카드). 실제 작업 사진으로 교체하세요.
- [ ] Projects 섹션의 "Example Project" 배지 — 실제 완료 사진으로 교체되면 지워주세요.
- [ ] 서비스 페이지 FAQ 답변 중 "청소 도구 지참 여부", "긴급 수리 대응", "영업시간 외 작업" 등은 일반적인 업계 관행을 기준으로 작성한 것이라, 실제 운영 방침과 다르면 각 파일에서 직접 수정해주세요.
- [ ] 전화(오클랜드 022 408 9301 / 9302, 시드니 +61 404 110 569)·이메일이 실제 응대 가능한지 확인

## 디자인 시스템

- **컬러**: Deep Forest Green `#1C2C20` · Sage `#7C8C74` · Warm White `#F8F6F1` · Soft Beige `#E8E1D5` · Charcoal `#252525`
- **폰트**: 헤드라인 Cormorant Garamond · 본문 Manrope (한국어/중국어는 Noto Sans KR/SC로 자동 대체)
- 모든 값은 `style.css` 상단 `:root` 변수로 모아뒀습니다.
