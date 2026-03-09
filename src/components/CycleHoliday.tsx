import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Christmas"
        | "Diwali"
        | "Halloween"
        | "New Years"
        | "Thanksgiving";
    const holiday_emojis: Record<Holiday, string> = {
        Christmas: "🎄",
        Diwali: "🪔",
        Halloween: "👻",
        "New Years": "🎊",
        Thanksgiving: "🦃",
    };
    const [holiday, set_holiday] = useState<Holiday>("New Years");
    function holiday_by_alphabet(): void {
        holiday === "Christmas" ? set_holiday("Diwali")
        : holiday === "Diwali" ? set_holiday("Halloween")
        : holiday === "Halloween" ? set_holiday("New Years")
        : holiday === "New Years" ? set_holiday("Thanksgiving")
        : set_holiday("Christmas");
    }
    function holiday_by_chronology(): void {
        holiday === "Christmas" ? set_holiday("New Years")
        : holiday === "Diwali" ? set_holiday("Thanksgiving")
        : holiday === "Halloween" ? set_holiday("Diwali")
        : holiday === "New Years" ? set_holiday("Halloween")
        : set_holiday("Christmas");
    }
    return (
        <div>
            <div>Holiday: {holiday_emojis[holiday]}</div>
            <Button onClick={holiday_by_alphabet}>Advance by Alphabet</Button>
            <Button onClick={holiday_by_chronology}> Advance by Year</Button>
        </div>
    );
}
