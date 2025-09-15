import { createContext, useContext, useState, useRef } from 'react';
import { THEME, createFrozenMap } from '../constants/config';


const TestContext = createContext();
export const useTestContext = () => useContext(TestContext);

export const TestContextProvider = ({ children }) => {
    // States and refs
    const APP_COMP = createFrozenMap([
        'login', 'instruction', 'test', 'upload',
    ]);

    const APP_STAGE = createFrozenMap([
        'login', 'instruction', 'test_main', 
        'timeup_3', 'test_supp', 'timeup_6', 'upload',
    ]);

    const [themeMode, setThemeMode] = useState(THEME.BLACK_WHITE);

    const [currComp, setCurrComp] = useState(APP_COMP.login);
    const stageRef = useRef(APP_STAGE.login);

    const [qid, setQid] = useState(0);
    const questionId = useRef(0);

    const egSid = useRef(null);
    const backCheckingInstruction = useRef(false);

    const [timeupVisible, setTimeupVisible] = useState(false);

    // Meta data
    const metaData = useRef({
        pid: '?',
        firstName: '?',
        lastName: '?',
        email: '?',
        theme: THEME.BLACK_WHITE,
        testOrder: '?',
        testType: '?',
        partLabel: '?',

        answer: ['?', '?', '?', '?', '?', '?', '?', '?', '?', '?'],
        totalTime: 0,

        answerInTime: 'none',
        scoreInTime: -1,
        answerOverTime: 'none',
        scoreOverTime: -1,
    });

    // Mouse event data collection
    const csvDataBuf = useRef([]);
    const mousePosRef = useRef({ x: 0, y: 0 });
    const objHoverOn = useRef('none');
    const timeStamps = useRef({
        t0: -1,
        t1: -1,
        t2: -1,
        t3: -1,
    });

    const modalPop = useRef(false);  // If the instruction review modal is pop
    const objRef = useRef({
        QF1: null, QF2: null, QF3: null, QF4: null, QF5: null,
        AO1: null, AO2: null, AO3: null, AO4: null, AO5: null,
        HELP: null,
    });
    
    return (
        <TestContext.Provider
            value={{
                APP_COMP, APP_STAGE, currComp, setCurrComp, stageRef, 
                themeMode, setThemeMode, metaData, objRef, egSid,
                backCheckingInstruction, timeStamps,
                csvDataBuf, mousePosRef, objHoverOn, 
                questionId, modalPop, qid, setQid,
                timeupVisible, setTimeupVisible,
            }}
        >
            {children}
        </TestContext.Provider>
    );
};
