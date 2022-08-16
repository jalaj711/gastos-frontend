import Card from "./Card";
import CircularProgress from "./CircularProgress";

export default function ActivityCard(props: {
    title: string;
    description: string;
    completed: number;
}){
    return (
        <Card extraStyles="width: 27vw">
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
                />
              </span>
            </div>
          </Card>
    )
}