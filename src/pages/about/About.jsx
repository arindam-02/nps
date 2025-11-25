import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Layout from "../../components/Layout/Layout";

const About = () => {
  const [lang, setLang] = React.useState("en");
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url('/assets/images/bg_2.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <h1 className="mb-2 bread">About Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>
                <span>
                  About us <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container about-section py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={"../../../assets/images/logo.png"}
              alt="schoolImage"
              className="img-fluid rounded shadow about-page-image"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="about-title mb-4">Nababharati Public School</h2>
            <p className="about-text">
              Nababharati Public School, located at Hizlock More, Bagnan,
              Howrah, is a premier institution dedicated to the all-round
              development of children. Affiliated with the C.B.S.E. (New Delhi)
              curriculum and operating as a co-educational school, it offers
              classes from Nursery to Standard V (for the current academic
              year).
              <br />
              <br />
              Managed by the Dakshinamurty Foundation, the school places a
              strong emphasis on academic excellence, character building, and
              holistic development. With AC classrooms, dedicated educators, and
              a curriculum that blends academics with C.A.T. (Creative and
              Analytical Thinking) sessions, Nababharati Public School is
              setting a new benchmark in foundational education.
              <br />
              <br />
              <strong>Vision:</strong> To nurture young minds into confident,
              compassionate, and creative individuals through a modern,
              inclusive, and value-based educational environment.
              <br />
              <strong>Mission:</strong> To provide a safe, supportive, and
              intellectually stimulating environment that fosters curiosity,
              innovation, and critical thinking.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <button
            onClick={() => setLang("en")}
            className={
              lang === "en"
                ? "btn btn-primary px-5 py-2 mx-4"
                : "btn btn-light px-5 py-2 mx-4"
            }
          >
            English
          </button>
          <button
            onClick={() => setLang("bn")}
            className={
              lang === "bn"
                ? "btn btn-primary px-5 py-2 mx-4"
                : "btn btn-light px-5 py-2 mx-4"
            }
          >
            Bengali
          </button>
          <button
            onClick={() => setLang("hi")}
            className={
              lang === "hi"
                ? "btn btn-primary px-5 py-2 mx-4"
                : "btn btn-light px-5 py-2 mx-4"
            }
          >
            Hindi
          </button>
        </div>

        {lang === "en" ? (
          /* Principal Section English*/
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="about-title mb-4">Principal's Message</h2>
              <p className="about-text">
                Dear Parents, Guardians, and Community Members,
                <br />
                <br />
                It is with immense joy and anticipation that I welcome you to
                the launch of our new primary school, a nurturing space for
                young minds from Nursery to Class 4. Nestled in the heart of our
                semi-urban community, our school is more than just a building—it
                is a promise of possibility, growth, and joyful learning.
                <br />
                <br />
                We believe that every child is a unique spark, and our mission
                is to help that spark shine brightly. Our curriculum blends
                foundational academics with creativity, play, and values-based
                education, ensuring that children not only learn but love to
                learn. With caring teachers, safe classrooms, and a vibrant
                environment, we aim to make the early years of schooling a
                memorable and meaningful journey.
                <br />
                <br />
                As we open our doors, we also open our hearts to
                collaboration—with parents, families, and the wider community.
                Together, we will build a school that reflects our shared hopes
                for the future: confident learners, kind citizens, and curious
                explorers.
                <br />
                Thank you for placing your trust in us. We look forward to
                growing together.
                <br />
                <br />
                <p className="m-0">Warm regards,</p>
                <strong> Nibetita Rawat Mukherjee </strong>
                <p className="m-0">Principal</p>
                <p className="m-0">Nababharati Public School</p>
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={"../../../assets/images/principal_nps.jpeg"}
                alt="principal"
                className="img-fluid rounded shadow principal-image"
              />
            </div>
          </div>
        ) : lang === "bn" ? (
          /* Principal Section Bengali*/
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2
                className="about-title mb-4"
                style={{ fontFamily: "bengFontBold" }}
              >
                প্রধান শিক্ষিকার বার্তা
              </h2>
              <div className="about-text" style={{ fontFamily: "bengFont" }}>
                <p>প্রিয় অভিভাবকমণ্ডলী, অভিভাবক ও সমাজের সদস্যবৃন্দ,</p>

                <p>
                  অত্যন্ত আনন্দ ও উত্তেজনার সঙ্গে আমি আপনাদের স্বাগত জানাচ্ছি
                  নবভারতী পাবলিক স্কুল -এর শুভ সূচনায়। সামান্য থেকে চতুর্থ
                  শ্রেণি পর্যন্ত ছোট ছোট শিক্ষার্থীদের জন্য এটি একটি নিবেদিত
                  শিক্ষাঙ্গন। আমাদের আশাপাশের এলাকায় অবস্থিত এই বিদ্যালয়
                  শিক্ষার্থীদের একটি উন্নত ভবিষ্যৎ গড়ার লক্ষ্য—এটি সহযোগিতা,
                  বিকাশ এবং আনন্দময় শিক্ষার একটি অভিজ্ঞান।
                </p>

                <p>
                  আমরা বিশ্বাস করি, প্রতিটি শিশু একটি অনন্য দান, এবং আমাদের
                  লক্ষ্য সেই দানকে উজ্জ্বল করে তোলা। আমাদের পাঠক্রমে মৌলিক
                  শিক্ষার সঙ্গে সৃজনশীলতা, খেলা এবং মূল্যবোধিক শিক্ষার সমন্বয়
                  রয়েছে, যাতে শিশুরা শিখে খেলতে পারে, শিখতে ভালোবাসে। যুগোপযোগী
                  শিক্ষক, বিশেষ শ্রেণিকক্ষ এবং প্রাণবন্ত পরিবেশের মাধ্যমে আমরা
                  প্রাথমিক শিক্ষাকে একটি স্মরণীয় ও অর্থবহ যাত্রা করে তুলতে চাই।
                </p>

                <p>
                  আমরা যখন আমাদের দায়িত্ব বুঝি, তখন আপনাদের সমর্থন—অভিভাবক,
                  পরিবার এবং সমাজের—সঙ্গে সহযোগিতার জন্য অনুরোধ জানাই। চলুন আমরা
                  একসাথে এমন একটি বিদ্যালয় গড়ে তুলি যা আমাদের সন্তানদের সমৃদ্ধ
                  প্রতিচ্ছবি ধারণ করবে: আত্মবিশ্বাসী শিক্ষার্থী, সদয় নাগরিক এবং
                  কৌতূহলী অন্বেষক।
                </p>

                <p>
                  আপনার আস্থার জন্য ধন্যবাদ। আমরা একসাথে এগিয়ে যাওয়ার
                  অপেক্ষায় রয়েছি।
                </p>

                <p>
                  সশ্রদ্ধ, <br />
                  <strong>নিবেদিতা রাওয়াত মুখার্জি </strong> <br />
                  প্রধান শিক্ষিকা <br />
                  নবভারতী পাবলিক স্কুল
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1700631102134-9aef0b7fe818?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwcHJpbmNpcGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                alt="principal"
                className="img-fluid rounded shadow principal-image"
              />
            </div>
          </div>
        ) : (
          /* Principal Section Hindi*/
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2
                className="about-title mb-4"
                style={{ fontFamily: "hindiFontBold" }}
              >
                प्रधानाचार्य का संदेश
              </h2>
              <div className="about-text" style={{ fontFamily: "hindiFont" }}>
                <p>प्रिय अभिभावकों, संरक्षकों और समुदाय के सदस्यों,</p>

                <p>
                  यह अत्यंत हर्ष और उत्साह के साथ है कि मैं आपको नवभारती पब्लिक
                  स्कूल के शुभारंभ पर स्वागत करती हूँ—एक पूर्ण शिक्षण स्थल जहाँ
                  नर्सरी से कक्षा 4 तक के नन्हे-मुन्ने बच्चों के लिए सीखने की
                  यात्रा शुरू होती है। हमारे अर्ध-शहरी क्षेत्र के बीच स्थित यह
                  विद्यालय केवल एक इमारत नहीं, बल्कि संभावनाओं, विकास और आनंदमय
                  शिक्षा का द्वार है।
                </p>

                <p>
                  हम मानते हैं कि हर बच्चा एक अनोखी प्रतिभा है, और हमारा
                  उद्देश्य है उस प्रतिभा को उजागर करना। हमारा पाठ्यक्रम बुनियादी
                  शिक्षा को रचनात्मकता, खेल और मूल्य-आधारित शिक्षा के साथ जोड़ता
                  है, जिससे बच्चे न केवल सीखें, बल्कि सीखने में प्रेम करें।
                  अनुभवी शिक्षक, सुरक्षित वातावरण और जीवन्त कक्षाओं के साथ, हम
                  प्राथमिक शिक्षा को एक यादगार और अर्थपूर्ण यात्रा बनाना चाहते
                  हैं।
                </p>

                <p>
                  हम अपने द्वार खोलते हैं, तो दिल भी खोलते हैं—अभिभावकों,
                  परिवारों और समुदाय के साथ सहयोग के लिए। आइए हम मिलकर एक ऐसा
                  विद्यालय बनाएँ जो हमारे साझा सपनों को साकार करे: आत्मविश्वासी
                  विद्यार्थी, संवेदनशील नागरिक और जिज्ञासु खोजकर्ता।
                </p>

                <p>
                  आपके विश्वास के लिए धन्यवाद। हम साथ मिलकर आगे बढ़ने की आशा
                  करते हैं।
                </p>

                <p>
                  सादर, <br />
                  <strong>निवेदिता रावत मुखर्जी </strong> <br />
                  प्रधानाचार्य <br />
                  नवभारती पब्लिक स्कूल
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1700631102134-9aef0b7fe818?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwcHJpbmNpcGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                alt="principal"
                className="img-fluid rounded shadow principal-image"
              />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default About;
