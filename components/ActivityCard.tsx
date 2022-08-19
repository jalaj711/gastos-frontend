import Card from "./Card";
import dynamic from "next/dynamic";

const CircularProgress = dynamic(
  () => import("./Progress/CircularProgress"),
  {
    ssr: false,
  }
);

export default function ActivityCard(props: {
    title: string;
    description: string;
    completed: number;
}){
  const colors = ['#6bc4abc7', '#6b8ac4c7', '#a46bc4c7', '#c4be6bc7', '#a46bc4c7']
    return (
        <Card extraStyles="width: 27vw" backgroundColor={colors[Math.floor(Math.random() * colors.length)]}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flexBasis: "70%" }}>
                <h3>{props.title}</h3>
                <p style={{color: '#fff6'}}>{props.description}</p>
              </div>
              <span style={{ flexBasis: "30%" }}>
                <CircularProgress
                  value={props.completed}
                  showValue
                  id={"progActivity" + props.title.replace(' ', '') + Math.random()*100}
                  dimension={100}
                  lineWidth={5}
                  offSet={-90}
                  colors={{stroke: '#fff6', backgroundTrack: '#0001'}}
                />
              </span>
            </div>
          </Card>
    )
}