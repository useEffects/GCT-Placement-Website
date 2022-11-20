import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const datas = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function AboutCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const contents = [
    {
      header: "About us",
      content: "The right skills and attitudes are nurtured through focused mentoring sessions that enable our students to develop the right mindset. This broadens their academic and professional horizons and transforms them into a performer in all the aspects of life."
    }, {
      header: "Moto",
      content: "Our main aim is to make sure that the students of this college find it extremely effortless to get placed in the company of their dreams and receive the sufficient training to do the same."
    }, {
      header: "Success Story",
      content: "The Placement and Training Cell has always been eminently supportive and has made sure everyone attains what they aim for. The fact that this college has thousands of students who have managed to achieve their goals speaks loudly about what we have managed to accomplish."
    }, {
      header: "Success Story",
      content: "The Placement "
    }
  ]

  // const maxSteps = datas.length;
  //
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  //
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box className="w-full h-full relative">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {datas.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className='h-[500px] flex justify-center items-center w-full relative bg-black'>
              <div className='relative z-10 w-full md:w-1/2'>
                <p className='text-5xl text-white mt-4 mb-9 text-center md:text-6xl'> {contents[index].header} </p>
                <p className='text-xl text-white px-3.5 text-justify md:text-2xl'> {contents[index].content} </p>
              </div>
              <Box
                component="img"
                className='opacity-30 h-full absolute top-0 bottom-0 left-0 right-0'
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      { /* <MobileStepper
        className="absolute top-0 left-0 right-0"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */ }
    </Box>
  );
}

export default AboutCarousel;
