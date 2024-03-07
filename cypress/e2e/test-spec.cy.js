import { NavigateTo } from '../POM/locators.cy';

const regex = /\[([^\]]+)\] ([<=>]+) \[([^\]]+)\]/;

describe('Fetch Coding Exercise - SDET', () => {
    beforeEach('Visiting Website', () => {
        cy.visit('/');
    });
    it('TC:01 Verify the faker gold bar with one step', () => {
        NavigateTo.leftBowlZeroIndex().type('0');
        NavigateTo.leftBowlFirstIndex().type('1');
        NavigateTo.leftBowlSecondIndex().type('2');
        NavigateTo.leftBowlThirdIndex().type('3');

        NavigateTo.rightBowlZeroIndex().type('4');
        NavigateTo.rightBowlFirstIndex().type('5');
        NavigateTo.rightBowlSecondIndex().type('6');
        NavigateTo.rightBowlThirdIndex().type('7');

        NavigateTo.clickOnWeighButton();
        cy.wait(3000);

        cy.get('ol')
            .invoke('text')
            .then((text) => {
                const match = text.match(regex);
                const comparisonSign = match[2];

                if (comparisonSign == '=') {
                    NavigateTo.clickOnEight();
                    cy.on('window:alert', (alertText) => {
                        
                        expect(alertText).to.equal('Yay! You find it!');
                        
                    });
                }
                //2nd step
                else if (comparisonSign == '>') {
                    NavigateTo.clickOnResetButton();
                    NavigateTo.leftBowlZeroIndex().type('4');
                    NavigateTo.leftBowlFirstIndex().type('5');

                    NavigateTo.rightBowlSecondIndex().type('6');
                    NavigateTo.rightBowlThirdIndex().type('7');

                    NavigateTo.clickOnWeighButton();
                    cy.wait(3000);

                    cy.get('ol > :nth-child(2)').then(($text) => {
                        const texts = $text.text();
                        const matchs = texts.match(regex);
                        const comparisonSign00 = matchs[2];

                        //3rd step
                        if (comparisonSign00 == '>') {
                            NavigateTo.clickOnResetButton();
                            NavigateTo.leftBowlZeroIndex().type('6'); //correct
                            NavigateTo.rightBowlSecondIndex().type('7'); // incorrect

                            NavigateTo.clickOnWeighButton();
                            cy.wait(3000);

                            cy.get('ol > :nth-child(3)').then(($text1) => {
                                const text = $text1.text();
                                const match = text.match(regex);
                                const comparisonSign01 = match[2];

                                if (comparisonSign01 == '>') {
                                    NavigateTo.clickOnSeven();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                } else if (comparisonSign01 == '<') {
                                    NavigateTo.clickOnSix();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                }
                            });
                        } else {
                            NavigateTo.clickOnResetButton();
                            NavigateTo.leftBowlZeroIndex().type('4'); //correct
                            NavigateTo.rightBowlSecondIndex().type('5'); // incorrect

                            NavigateTo.clickOnWeighButton();
                            cy.wait(3000);

                            cy.get('ol > :nth-child(3)').then(($text2) => {
                                const text = $text2.text();
                                const match = text.match(regex);
                                const comparisonSignsS = match[2];

                                if (comparisonSignsS == '>') {
                                    NavigateTo.clickOnFive();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                } else if (comparisonSignsS == '<') {
                                    NavigateTo.clickOnFour();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                }
                            });
                        }
                    });
                } else if (comparisonSign == '<') {
                    NavigateTo.clickOnResetButton();
                    NavigateTo.leftBowlZeroIndex().type('0');
                    NavigateTo.leftBowlFirstIndex().type('1');

                    NavigateTo.rightBowlSecondIndex().type('2');
                    NavigateTo.rightBowlThirdIndex().type('3');

                    NavigateTo.clickOnWeighButton();
                    cy.wait(3000);

                    cy.get('ol > :nth-child(2)').then(($text3) => {
                        const text = $text3.text();
                        const matchs = text.match(regex);
                        const comparisonSign1 = matchs[2];

                        //3rd step
                        if (comparisonSign1 == '>') {
                            NavigateTo.clickOnResetButton();
                            NavigateTo.leftBowlZeroIndex().type('2'); //correct
                            NavigateTo.rightBowlSecondIndex().type('3'); // incorrect

                            NavigateTo.clickOnWeighButton();
                            cy.wait(3000);

                            cy.get('ol > :nth-child(3)').then(($text4) => {
                                const text = $text4.text();
                                const match = text.match(regex);
                                const comparisonSign2 = match[2];

                                if (comparisonSign2 == '>') {
                                    NavigateTo.clickOnThree();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                } else if (comparisonSign2 == '<') {
                                    NavigateTo.clickOnTwo();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                }
                            });
                        } else {
                            NavigateTo.clickOnResetButton();
                            NavigateTo.leftBowlZeroIndex().type('0'); //correct
                            NavigateTo.rightBowlSecondIndex().type('1'); // incorrect

                            NavigateTo.clickOnWeighButton();
                            cy.wait(3000);

                            cy.get('ol > :nth-child(3)').then(($text5) => {
                                const text = $text5.text();
                                const match = text.match(regex);
                                const comparisonSign3 = match[2];

                                if (comparisonSign3 == '>') {
                                    NavigateTo.clickOnOne();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                } else if (comparisonSign3 == '<') {
                                    NavigateTo.clickOnZero();
                                    cy.on('window:alert', (alertText) => {
                                        
                                        expect(alertText).to.equal('Yay! You find it!');
                                        
                                    });
                                }
                            });
                        }
                    });
                }
            });
    });
});
