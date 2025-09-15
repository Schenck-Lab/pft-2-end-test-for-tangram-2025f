import { useState, useEffect } from 'react';
import { Divider, Button } from 'antd';
import { SECTION } from '../constants/questions';
import { useTestContext } from './TestContext';
import QuestionFrames from './QuestionFrames';
import AnswerOptions from './AnswerOptions';
import HelpMenu from './HelpMenu';
import { OBJ_LIST, formatTime } from '../constants/config';


function TimeupPrompt({ visible, setTimeupVisible, setSuffix }) {
    const { 
        APP_STAGE, APP_COMP, setCurrComp, stageRef, timeStamps,
        backCheckingInstruction, csvDataBuf, mousePosRef, metaData,
    } = useTestContext();
    const is6minTimeup = (stageRef.current === APP_STAGE.timeup_6);
    

    const overlay = {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
    };

    const panel = {
        width: 'min(720px, 92vw)',
        background: '#fff',
        borderRadius: 15,
        boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
        padding: '28px 28px 22px',
        textAlign: 'center',
    };

    const title = { fontSize: 26, fontWeight: 800, margin: '0 0 10px' };
    const msg = { fontSize: 18, lineHeight: 1.55, margin: '0 0 18px', color: '#334' };
    const THREE_MIN_IN_MILLISEC = 3 * 60 * 1000;


    useEffect(() => {
        if (!visible) return;

        // Write data
        csvDataBuf.current.push([
            stageRef.current.toUpperCase(),
            formatTime(),
            mousePosRef.current.x,
            mousePosRef.current.y,
            OBJ_LIST.none,
            0,
        ]);

        if (timeStamps.current.t1 === -1) {
            timeStamps.current.t1 = Date.now();
        }
        else {
            timeStamps.current.t3 = Date.now();
        }

    // eslint-disable-next-line
    }, [visible]);

    const onContinue = () => {
        
        // Submit
        if (is6minTimeup) {
            // Write data [SUBMIT_3]
            csvDataBuf.current.push([
                stageRef.current.toUpperCase(),
                formatTime(),
                mousePosRef.current.x,
                mousePosRef.current.y,
                OBJ_LIST.SUBMIT_3,
                1,
            ]);

            metaData.current.totalTime = 360; // 6 mins

            setCurrComp(APP_COMP.upload);
            stageRef.current = APP_STAGE.upload;
        
        // Continue
        } else {
            // compute answer and score at 3 min
            let score = 0;
            let index = 0;
            const answerString = metaData.current.answer.reduce((acc, cur) => {
                if (cur === SECTION[metaData.current.partLabel][index].answerKeyNum) {
                    score++;
                }
                index++;

                if (cur >= 0 && cur <= 4) {
                    // map 0→A, 1→B, ... 4→E
                    return acc + String.fromCharCode(65 + cur);
                } else {
                    return acc + '?';
                }
            }, "");
            metaData.current.answerInTime = answerString;
            metaData.current.scoreInTime = score;


            timeStamps.current.t2 = Date.now();
            // Write data [SUBMIT_3]
            csvDataBuf.current.push([
                stageRef.current.toUpperCase(),
                formatTime(),
                mousePosRef.current.x,
                mousePosRef.current.y,
                OBJ_LIST.CONTINUE,
                1,
            ]);

            stageRef.current = APP_STAGE.test_supp;

            setTimeout(() => {
                if (stageRef.current === APP_STAGE.test_supp) {
                    setCurrComp(APP_COMP.test);
                    backCheckingInstruction.current = false;

                    setTimeupVisible(true);
                    stageRef.current = APP_STAGE.timeup_6;
                }
            }, THREE_MIN_IN_MILLISEC);

        }
        setTimeupVisible(false);
        setSuffix('*');
    };

    
    const buttonLabel = (is6minTimeup) ? 'Submit' : 'Continue the Test';
    const titleText = (is6minTimeup) ? 'Time Up (6 minutes)' : 'Time Up (3 minutes)';
    const msgPara = (is6minTimeup) ? 
        <p style={msg}>
            <b>Time is up.</b> Nice work! Please click <b>Submit</b> to finish the test.
        </p>
        :
        <p style={msg}>
            <b>Time is up.</b> Great job! Now you have another 3 minutes to continue the test.
            If you are ready, please click the <b>Continue the Test</b> button below.
        </p>

    if (!visible) return null;
    return (
        <div style={overlay} role="dialog" aria-modal="true" aria-labelledby="timeup-title">
        <div style={panel}>
            <h2 id="timeup-title" style={title}>{titleText}</h2>
            {msgPara}
            <Button
                type="primary"
                size="large"
                onClick={onContinue}
                style={{ minWidth: 220, height: 44, fontSize: 18, fontWeight: 700 }}
            >
                {buttonLabel}
            </Button>
        </div>
        </div>
    );
}


function QuestionButton({buttonId, sid, handleJumpTo}) {
    const { metaData, qid, APP_STAGE, stageRef, objHoverOn } = useTestContext();

    const [current, setCurrent] = useState(qid === buttonId);
    const [answered, setAnswered] = useState(metaData.current.answer[buttonId] !== '?');
    
    useEffect(() =>{
        setCurrent(qid === buttonId);
        setAnswered(metaData.current.answer[buttonId] !== '?');
    // eslint-disable-next-line
    }, [sid, buttonId, qid]);

    const inTest = [APP_STAGE.test_main, APP_STAGE.test_supp].includes(stageRef.current);

    const handleMouseEnter = (i) => {
        if (!inTest) return;
        objHoverOn.current = `B${i + 1}`;
    };

    const handleMouseLeave = (i) => {
        if (!inTest) return;
        objHoverOn.current = 'none';
    };

    return (
        <button
            key={buttonId}
            onClick={() => handleJumpTo(buttonId)}
            onMouseEnter={() => handleMouseEnter(buttonId)}
            onMouseLeave={() => handleMouseLeave(buttonId)}
            aria-label={`Go to question ${buttonId + 1}${answered ? ', answered' : ''}`}
            style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: (current) ? `1px solid #33506cff` :  `1px solid #8698a9ff`,
                background: answered ? 
                    (current ? '#4395c8ff' : '#abcadeff') : 
                    (current ? '#eeeeee' : '#f7f7f7ff'),
                color: answered ? (current ? '#fff' : '#eee') 
                                : (current ? '#222' : '#aaa'),
                fontSize: '18px',
                fontWeight: (current) ? 'bolder' : 700,
                lineHeight: '32px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: (current) ? ((answered) 
                    ? '0 0 0 15px rgba(160, 206, 230, 1)' 
                    : '0 0 0 15px rgba(222, 222, 222, 1)') 
                    : 'none',
                cursor: 'pointer',
            }}
        >
            {buttonId + 1}
        </button>
    );
}


function QuestionSelectors({sid}) {
    const { questionId, metaData, setQid } = useTestContext();

    const section = SECTION[metaData.current.partLabel];
    const total = section.length;
    
    // handle click
    const handleJumpTo = (nextIdx) => {
        questionId.current = nextIdx;
        setQid(nextIdx);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 30,
                flexWrap: 'wrap',
                marginTop: 30,
                marginBottom: 12,
            }}
        >
        {Array.from({ length: total }).map((_, i) => {
            return <QuestionButton 
                key={i} 
                buttonId={i} 
                sid={sid} 
                handleJumpTo={handleJumpTo}
            />;
        })}
        </div>
    );
}


function TestRunner() {
    const { 
        APP_STAGE, APP_COMP, setCurrComp, stageRef,
        mousePosRef, questionId, csvDataBuf, metaData,
        qid, timeupVisible, setTimeupVisible, timeStamps,
    } = useTestContext();

    const section = SECTION[metaData.current.partLabel];

    
    const [suffix, setSuffix] = useState('');
    const [sid, setSid] = useState(null);  // Selected answer option index

    useEffect(() => {
        setSid(metaData.current.answer[qid]);
    // eslint-disable-next-line
    }, [qid]);
    
    const questionLabel = (
        <div style={{ 
            fontFamily: 'Arial, sans-serif', 
            fontSize: '36px', 
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
        }}>
            Part {metaData.current.partLabel} &ndash; Question {qid + 1}{suffix}
        </div>
    );

    const total = section.length;
    const answersArr = Array.isArray(metaData.current.answer)
        ? metaData.current.answer
        : Array.from(metaData.current.answer || '');

    // All answered = no '?' / null / undefined and length matches total
    const allAnswered = (answersArr.length === total &&
        answersArr.every(v => [0,1,2,3,4].includes(v)));

    
    // Submit handler (advance to your next stage, mirror your previous finalize logic)
    const handleSubmit = () => {

        const inMainTest = stageRef.current === APP_STAGE.test_main;
        const submitType = (inMainTest) ? OBJ_LIST.SUBMIT_1 : OBJ_LIST.SUBMIT_2;

        // Write data [SUBMIT 1 or 2]
        csvDataBuf.current.push([
            `B${questionId.current + 1}`,
            formatTime(),
            mousePosRef.current.x,
            mousePosRef.current.y,
            submitType,
            1,
        ]);

        if (inMainTest) {
            timeStamps.current.t1 = Date.now();
        }
        else {
            timeStamps.current.t3 = Date.now();
        }
 
        stageRef.current = APP_STAGE.upload;
        setCurrComp(APP_COMP.upload);
    };
    
    const submitButton = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', 
                marginTop: 15, marginBottom: 15 }}>
                <Button
                    type="primary"
                    size="large"
                    disabled={!allAnswered}
                    onClick={handleSubmit}
                    style={{ minWidth: 240, height: 42, fontSize: 18, fontWeight: 700 }}
                >
                    Submit
                </Button>
            </div>
        );
    };

    const buttonBoxStyles = {
        backgroundColor: '#f4f6f8',   // light gray
        borderRadius: 15,             // rounded corners
        padding: '1px 85px',         // breathing room
        margin: '30px auto 0',        // center the group
        width: 'max-content',         // shrink to fit contents
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,                      // space between dots and Submit
        border: 'none',
        outline: 'none',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06)', // subtle depth, not a border
    };

    const questionContent = (
        <div 
            key={`k-${qid}`}
            className='fade-in' 
            style={{ textAlign: 'center', marginTop: 35 }}
        >
            <div style={{ display: 'inline-block' }}>
                <QuestionFrames 
                    frames={section[qid].questionFrames} 
                />
                <Divider />
                <AnswerOptions 
                    frames={section[qid].answerOptions} 
                    sid={sid}
                    setSid={setSid}
                />
            </div>
        </div>
    );


    return (
        <div>
            {questionLabel}
            {questionContent}
            <div style={buttonBoxStyles}>
                <QuestionSelectors sid={sid} setSid={setSid} />
                {submitButton()}
            </div>
            <HelpMenu />
            <TimeupPrompt
                visible={timeupVisible}
                setTimeupVisible={setTimeupVisible}
                setSuffix={setSuffix}
            />
        </div>
    );
}

export default TestRunner;
