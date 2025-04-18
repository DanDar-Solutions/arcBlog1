import styles from './About.module.css'
import { useState } from 'react'

function About(){
    const [activeTab, setActiveTab] = useState('skills');
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return(
    <>
      <div className={styles['about-page']}>
        <div className={styles['profile-section']}>
          <div className={styles['profile-image']}>
            {/* You can replace this with an actual image path */}
            <div className={styles['image-placeholder']}>
              <span>Profile Photo</span>
            </div>
          </div>
          <div className={styles['profile-info']}>
            <h1 className={styles['name']}>Нэр</h1>
            <h2 className={styles['title']}>Веб Хөгжүүлэгч</h2>
            <p className={styles['bio']}>
              Орчин үеийн технологиуд ашиглан хэрэглэгч төвтэй, шинэлэг вебсайт бүтээдэг туршлагатай хөгжүүлэгч. 
              React.js, HTML5, CSS3 болон JavaScript дээр төвлөрч ажилладаг. 
              Miнималист дизайн, сайн UX/UI туршлага бүхий интерактив веб аппликейшнууд бүтээх дуртай.
            </p>
            <div className={styles['social-links']}>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles['social-icon']}>GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles['social-icon']}>LinkedIn</a>
              <a href="mailto:your.email@example.com" className={styles['social-icon']}>Email</a>
            </div>
          </div>
        </div>

        <div className={styles['content-section']}>
          <div className={styles['tabs']}>
            <button 
              className={`${styles['tab']} ${activeTab === 'skills' ? styles['active'] : ''}`}
              onClick={() => handleTabClick('skills')}
            >
              Ур чадвар
            </button>
            <button 
              className={`${styles['tab']} ${activeTab === 'experience' ? styles['active'] : ''}`}
              onClick={() => handleTabClick('experience')}
            >
              Туршлага
            </button>
            <button 
              className={`${styles['tab']} ${activeTab === 'education' ? styles['active'] : ''}`}
              onClick={() => handleTabClick('education')}
            >
              Боловсрол
            </button>
          </div>

          <div className={styles['tab-content']}>
            {activeTab === 'skills' && (
              <div className={styles['skills-content']}>
                <div className={styles['skill-category']}>
                  <h3>Front-end</h3>
                  <div className={styles['skills-list']}>
                    <span className={styles['skill-item']}>HTML5</span>
                    <span className={styles['skill-item']}>CSS3</span>
                    <span className={styles['skill-item']}>JavaScript</span>
                    <span className={styles['skill-item']}>React.js</span>
                    <span className={styles['skill-item']}>Responsive Design</span>
                  </div>
                </div>
                <div className={styles['skill-category']}>
                  <h3>Back-end</h3>
                  <div className={styles['skills-list']}>
                    <span className={styles['skill-item']}>Node.js</span>
                    <span className={styles['skill-item']}>Express</span>
                    <span className={styles['skill-item']}>MongoDB</span>
                  </div>
                </div>
                <div className={styles['skill-category']}>
                  <h3>Tools</h3>
                  <div className={styles['skills-list']}>
                    <span className={styles['skill-item']}>Git</span>
                    <span className={styles['skill-item']}>VS Code</span>
                    <span className={styles['skill-item']}>Figma</span>
                    <span className={styles['skill-item']}>npm</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className={styles['experience-content']}>
                <div className={styles['experience-item']}>
                  <div className={styles['experience-header']}>
                    <h3>Веб Хөгжүүлэгч</h3>
                    <span className={styles['date']}>2022 - Одоог хүртэл</span>
                  </div>
                  <h4>Компаний нэр</h4>
                  <ul>
                    <li>React.js ашиглан харилцагчийн вебсайтыг хөгжүүлж, арчилсан</li>
                    <li>Кодыг оновчлох замаар вебсайтын гүйцэтгэлийг 40% нэмэгдүүлсэн</li>
                    <li>Дизайны багтай хамтран responsive загварыг хэрэгжүүлсэн</li>
                  </ul>
                </div>
                <div className={styles['experience-item']}>
                  <div className={styles['experience-header']}>
                    <h3>Frontend Хөгжүүлэгч Дадлагажигч</h3>
                    <span className={styles['date']}>2021 - 2022</span>
                  </div>
                  <h4>Өөр Компани</h4>
                  <ul>
                    <li>Компанийн гол бүтээгдэхүүнд UI компонентууд бүтээхэд туслалцсан</li>
                    <li>Код шалгалт, багийн уулзалтуудад оролцсон</li>
                    <li>Веб хөгжүүлэлтийн салбарын шилдэг туршлагуудыг судалсан</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className={styles['education-content']}>
                <div className={styles['education-item']}>
                  <div className={styles['education-header']}>
                    <h3>Компьютерийн ухааны бакалавр</h3>
                    <span className={styles['date']}>2018 - 2022</span>
                  </div>
                  <h4>Их Сургуулийн нэр</h4>
                  <p>Онцлог дүнтэй төгссөн. Веб технологи, UI/UX дизайны чиглэлээр мэргэшсэн.</p>
                </div>
                <div className={styles['education-item']}>
                  <div className={styles['education-header']}>
                    <h3>Full Stack Веб Хөгжүүлэлтийн Bootcamp</h3>
                    <span className={styles['date']}>2021</span>
                  </div>
                  <h4>Кодинг Академи</h4>
                  <p>Орчин үеийн JavaScript фрэймворкууд болон backend технологиуд дээр төвлөрсөн эрчимтэй 3 сарын хөтөлбөр.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className={styles['ai-attribution']}>
          <p>This page made by 100% AI</p>
        </div>
      </div>
    </>
    );
}

export default About 