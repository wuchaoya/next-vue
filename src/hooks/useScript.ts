import {watchEffect} from 'vue';
import useState from './useState';

/**
 * @param src
 * @return status.value ("idle", "loading", "ready", "error")
 */
export default function useScript (src: string) {
  
  
  const [status, setStatus] = useState(src ? "loading" : "idle");
  
  watchEffect((onInvalidate) => {
    
    if (!src) setStatus("idle"); return;
  
    let script:HTMLScriptElement  = document.querySelector(`script[src="${src}"]`) || document.createElement("script");
  
  
    if (!script) {
      
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");
      
      document.body.appendChild(script);
    
      
      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          "data-status",
          event.type === "load" ? "ready" : "error"
        );
      };
    
      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    } else {
  
      const statusNow: string  = script.getAttribute("data-status") || status.value
      
      setStatus( statusNow);
     
    }
  
    const setStateFromEvent = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };
  
    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);
  
    onInvalidate(() => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    })
  
  })
  
  return status;
  
}
