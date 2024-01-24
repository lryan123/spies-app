import Header from './components/Header'
import './AboutPage.css';

const titleString: string = "WHANAUNGATANGA";
const paraString: string = `If there was one word to describe SPIES, it would be “whanaungatanga”.​ For students studying with us today, we hope that we can provide a home away from home.\nFor the future, we envisage a world where our people thrive in the engineering workforce and are able to pave the way for more to come. We aspire to help our people realize their potential and go on to change the world. We are a minority in this industry, however, we accept the challenge that comes with it.`;

function AboutPage() {
  const paragraphs = paraString.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className='main'>
      <Header title={titleString} para={paragraphs} />

      <section className='description-section-one'>

      </section>
      
    </div>
  );
}

export default AboutPage;
