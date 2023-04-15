
import { Row } from "antd"
import { showNotification } from './components/general/notification';

type OptionsProps = {
  title: string;
  lang: string;
  body: string;
  vibrate: Array<number>
}
const App = () => {

  const options: OptionsProps = {
    //icon:<AiFillEye/>,
    title: "Title",
    lang: "tr",
    body: "Bir yeni mesaj bildiriminiz var",
    vibrate: [200, 100, 200],
  }

  const notification = new Notification(options.title, options)
  if (!("Notification" in window)) showNotification("warning", "Warning", "This browser does not support desktop notification", null)
  else if (Notification.permission === "granted") showNotification("success", "Success", "Notification permission granted", null)
  else if (Notification.permission === "denied") showNotification("success", "Success", "Notification permission granted", null)
  else {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          notification.onclick = () => {
            notification.close();
            window.parent.focus();
          }
        }

      })
  }
  return (<Row>

  </Row>)
}


export default App;
