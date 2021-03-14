function element() {
    var element_a = document.createElement('a');
    element_a.textContent = document.getElementById('link_name').value;
    element_a.href = document.getElementById('url').value;
    document.body.appendChild(element_a);
}

window.onload = function () {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', element, 'false');
}

import React, { useEffect, useReducer } from 'react'

//省略

const APP_KEY = 'sampleApp'

const App = () => {
    const appState = localStorage.getItem(APP_KEY)
    const initialState = appState ? JSON.parse(appState) : {
        events: [],
        operationLogs: []
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem(APP_KEY, JSON.stringify(state))
    }, [state])

    return (
        {/* ---------------------------

       ここに表示させたいフォーマットを書く

     ----------------------------------     */}

    )
}

export default App
