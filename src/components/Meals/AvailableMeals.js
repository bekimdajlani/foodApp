import {useEffect , useState} from "react";

import classes from './availablemeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
    const [meals,setMeals] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const[httpError,setHttpError] = useState(null);

    useEffect(() => {
    const fetchMeals = async () =>  {
       const response = await fetch(`https://testreactb-default-rtdb.europe-west1.firebasedatabase.app/meals.json`);


       if(!response.ok){
        throw new Error('Something went wrong!');
       }
       const responseData = await response.json();

       const loadedMeals = [];

       for (const key in responseData){
        loadedMeals.push({
            id:key,
            name: responseData[key].name,
            description: responseData[key].description,
            price:responseData[key].price
        });
       };
       setMeals(loadedMeals);
       setIsLoading(false);
    };
        
            fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if(isLoading){
        return <section className={classes.mealIsLoading}>
            <p>Loading...</p>
        </section>
    }

    if(httpError){
        return <section className={classes.mealError}>
        <p>{httpError}</p>
    </section>
    }

    const mealList = meals.map((meal) => {

        return (
            <MealItem
                key={meal.id}
                id = {meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )

    })
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;