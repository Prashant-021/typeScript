type draggable = {
    drag: () => void;
}

type resizable = {
    resize: () => void;
}

type uiWidget = draggable & resizable; //type intersection

let widget: uiWidget = {
    drag() {
        
    },
    resize() {

    }
}