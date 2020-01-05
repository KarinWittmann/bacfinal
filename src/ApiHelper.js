import axios from "axios";

class ApiHelper {
    static addScore = (level, profile, points) => {
        return (
            axios.post(
                "https://targetpractise-3737.restdb.io/rest/usertable/5dc4608cd6e262610002212d/scores",
                {
                  level,
                  profile,
                  points
                },
                {
                  headers: {
                    "content-type": "application/json",
                    "x-apikey": "5dc456d464e7774913b6ea11"
                  }
                }
              )
            .then(response => {
              console.log("score gespeichert");
              console.log(response);
            })
        );
    }
}

export default ApiHelper;
