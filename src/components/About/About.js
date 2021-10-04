import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import images from '../../images/benar2.jpg';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
            <h1 className="fw-bold text-center m-5 main-title">About Us</h1>
                <div className="card mb-3">
                    <img src={images} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators; however, learners can also educate themselves. Education can take place in formal or informal settings, and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.
                            Formal education is commonly divided formally into stages such as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship. In most regions, education is compulsory up to a certain age.
                            There are movements for education reforms, such as for improving quality and efficiency of education towards relevance in students' lives and efficient problem solving in modern or future society at large, or for evidence-based education methodologies. A right to education has been recognized by some governments and the United Nations.[a] Global initiatives aim at achieving the Sustainable Development Goal 4, which promotes quality education for all.</p>
                        <p className="card-text"><small className="text-muted text-center fw-bold">Lorne More</small></p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;