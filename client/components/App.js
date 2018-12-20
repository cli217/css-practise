import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <React.Fragment>
            <header>
                <div class='grid'>
                    <div>box1</div>
                    <div>box2</div>
                </div>
            </header>

            <nav>
                NavBar
            </nav>

            <main>
                <div class='pimg1'>
                    <div class="ptext">
                        <div class='textborder'>
                            <span class="border">
                                Ian Mok
                            </span>
                        </div>
                    </div>
                </div>

                <section class="section section-light">
                    <h2>How to be retarded</h2>
                    <p>content</p>
                </section>

                <div class='pimg2'>
                    <div class="ptext">
                        <span class="border trans">
                            Hi
                        </span>
                    </div>
                </div>

                <section class="section section-dark">
                    <h2>How to have bad taste buds</h2>
                    <p>content</p>
                </section>

                <div class='pimg3'>
                    <div class="ptext">
                        <span class="border trans">
                            Hi
                        </span>
                    </div>
                </div>

                <section class="section section-light">
                    <h2>section3</h2>
                    <p>content</p>
                </section>

                <div class='pimg1'>
                    <div class="ptext">
                        <span class="border">
                            Website
                        </span>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default App