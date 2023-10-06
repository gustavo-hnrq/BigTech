import img1 from '../../images/img1.svg'
import img2 from '../../images/img2.svg'
import git from '../../images/github.svg'
import './startpage.css'



function Startpage() {
    return(
        <div>
            
            <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="lg:py-24">
                                <h2 className='font-semibold text-cyan-950 mb-5 text-lg'>TECNOLOGIA</h2>
                                <h1 className="text-7xl font-bold text-cyan-950 mb-7 max-sm:text-5xl">O que são Big Techs?</h1>
                                <p className="mt-4 text-gray-600 text-lg">
                                As big techs são grandes empresas de tecnologia que desempenham um papel fundamental na nossa vida digital. 
                                Elas são conhecidas por sua influência global e pelos produtos e serviços inovadores que oferecem. Essas empresas
                                têm uma enorme presença na internet e em muitos aspectos da tecnologia moderna.
                                </p>
                            </div>
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:order-last ">
                                <img
                                src={img1}
                                class="absolute h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                <hr className='mx-auto max-w-screen-xl' />
            </section>


            <section>
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div class="lg:py-24 lg:order-2">
                            <h2 class="text-7xl font-bold text-cyan-950 mb-7 max-sm:text-5xl">Qual a sua importância?</h2>
                            <p class="mt-4 text-gray-600 text-lg">
                            As big techs são essenciais devido à sua inovação tecnológica, facilitação da conexão global, impacto na economia digital,
                            acesso à informação e influência global. Elas criam produtos que melhoram nossas vidas, conectam pessoas, impulsionam a economia,
                            fornecem acesso à informação e têm influência global. 
                            </p>
                        </div>
                        
                        <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-1">
                            <img
                            src={img2}
                            class="absolute inset-0 h-full w-full"
                            />
                        </div>
                    </div>
                </div>
                <hr className='mx-auto max-w-screen-xl' />
            </section>

            <footer class="bg-cyan-950 rounded-lg shadow m-4 mx-auto max-w-screen-xl max-sm:ml-5 max-sm:mr-5 max-lg:ml-5 ">
                <div class="w-full max-w-screen-xl mx-auto p-10 py-12">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="#" class="flex items-center mb-4 sm:mb-0">
                            <img src={git} class="h-8 mr-3"/>
                            <span class="self-center text-1xl font-medium whitespace-nowrap text-white">BigTech.com</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" class="mr-4 hover:underline md:mr-6 ">Link 1</a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 hover:underline md:mr-6">Link 2</a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 hover:underline md:mr-6 ">Link 3</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Startpage