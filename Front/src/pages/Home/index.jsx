import React from 'react';
import Main from "../../components/Home/Main";
import Intro from "../../components/Home/Intro";
import IntroRarity from "../../components/Home/IntroRarity";
import FAQ from "../../components/Home/FAQ";
import SlideContainer from "../../components/Home/SlideContainer";

const index = () => {
    return (
       <>
           <Main/>
           <Intro/>
           <IntroRarity/>
           <SlideContainer/>
           <FAQ/>
       </>
    );
};

export default index;