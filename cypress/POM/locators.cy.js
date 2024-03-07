 export class mainPage {

// Number Bars locators

 clickOnZero (){
    cy.get("#coin_0").click()
 }

 clickOnOne (){
     cy.get("#coin_1").click()
 }

 clickOnTwo (){
     cy.get("#coin_2").click()
 }

 clickOnThree (){
     cy.get("#coin_3").click()
 }

 clickOnFour (){
     cy.get("#coin_4").click()
 }

 clickOnFive (){
     cy.get("#coin_5").click()
 }

 clickOnSix (){
     cy.get("#coin_6").click()
 }

 clickOnSeven (){
     cy.get("#coin_7").click()
 }

 clickOnEight (){
     cy.get("#coin_8").click()
 }

 // Left Bowl Boxes Locators

leftBowlZeroIndex(){
    return cy.get("#left_0").click()
}
leftBowlFirstIndex(){
    return cy.get("#left_1").click()
}
leftBowlSecondIndex(){
    return cy.get("#left_2").click()
}
leftBowlThirdIndex(){
    return cy.get("#left_3").click()
}
leftBowlFourthIndex(){
    return cy.get("#left_4").click()
}


// Right Bowl Boxes Locators

rightBowlZeroIndex(){
    return cy.get("#right_0").click()
}
rightBowlFirstIndex(){
    return cy.get("#right_1").click()
}
rightBowlSecondIndex(){
    return cy.get("#right_2").click()
}
rightBowlThirdIndex(){
    return cy.get("#right_3").click()
}
rightBowlFourthIndex(){
    return cy.get("#right_4").click()
}

// Reset & Wiegh Button Locators

clickOnWeighButton(){
    return cy.get("#weigh").click()
}

clickOnResetButton(){
    return cy.get(':nth-child(4) > #reset').click({force: true})
}

}

 export const NavigateTo = new mainPage();