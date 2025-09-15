import { useEffect, useRef } from 'react';
import { MIN_DISPLACEMENT_THR, formatTime } from '../constants/config';
import { DisplacementChecker } from '../utils/DisplacementChecker';
import { useTestContext } from './TestContext';


const validClickList = [
    'QF1', 'QF2', 'QF3', 'QF4', 'QF5',
    'AO1', 'AO2', 'AO3', 'AO4', 'AO5',
    'B1','B2','B3','B4','B5',
    'B6','B7','B8','B9','B10',
];

function MouseEventRecorder() {
    const { 
        APP_STAGE, stageRef, csvDataBuf, mousePosRef, 
        backCheckingInstruction, objHoverOn, questionId,
    } = useTestContext();

    const currentHover = useRef('START');

    // Contains mouse move and mouse click handlers
    useEffect(() => {
        const dispChecker = new DisplacementChecker(MIN_DISPLACEMENT_THR);

        const handleMouseMove = (e) => {
            // Collect data only when participant is doing the test questions
            const inMainTest = stageRef.current === APP_STAGE.test_main;
            const inSuppTest = stageRef.current === APP_STAGE.test_supp;
            const notReviewing = !backCheckingInstruction.current;
            const isActive = (inMainTest || inSuppTest) && notReviewing;

            // Get mouse pos
            const x = e.clientX;
            const y = e.clientY;
            mousePosRef.current.x = x;
            mousePosRef.current.y = y;

            if (!isActive) {
                return;
            }

            // Hover-on updates
            const hoverChanged = (currentHover.current !== objHoverOn.current);
            if (hoverChanged) {
                currentHover.current = objHoverOn.current;
            }
            const hasMovedEnough = dispChecker.exceedsThreshold(x, y);

            // 
            
            // Prepare data record and write into buffer
            if (hoverChanged || hasMovedEnough) {
                csvDataBuf.current.push([
                    `Q${questionId.current + 1}`,
                    formatTime(),
                    x,
                    y,
                    currentHover.current,
                    0,
                ]);
            }
        };

        const handleClick = (e) => {
            // Collect data only when participant is doing the test questions
            const inMainTest = stageRef.current === APP_STAGE.test_main;
            const inSuppTest = stageRef.current === APP_STAGE.test_supp;
            const notReviewing = !backCheckingInstruction.current;
            const isActive = (inMainTest || inSuppTest) && notReviewing;
            if (!isActive) {
                return;
            }

            // This handler does not write data when 'Confirm' button is clicked.
            if (!validClickList.includes(currentHover.current)) {
                return;
            }
            const x = e.clientX;
            const y = e.clientY;
            
            csvDataBuf.current.push([
                `Q${questionId.current + 1}`,
                formatTime(),
                x,
                y,
                currentHover.current,
                1,
            ]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
        };
    // eslint-disable-next-line
    }, []);

    return null;
}

export default MouseEventRecorder;
