import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // setCategories( cat => [...cat, 'Dragon Ball'])
    }

    return (

        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            // setCategories={ setCategories }
            />


            {
                categories.map((category) =>
                    <GifGrid key={category} category={category} />
                )
            }

        </>
    )
}
