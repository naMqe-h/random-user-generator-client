import { code, firstAnswer, secondAnswer } from "../assets/data/DocsData"

export default function Docs() {

    return (
        <div className="h-full overflow-y-auto">
            <h1 className="text-3xl mb-12 font-bold">Documentation for API</h1>

            <h1 className="text-xl mb-3">Default URL:</h1>
            <div className="alert mb-6">
                <div className="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
                    </svg> 
                    <label className="text-warning">https://user-data-generator-for-polish-people.p.rapidapi.com</label>
                </div>
            </div>
            <h1 className="text-xl mb-3">Example of code:</h1>
            <div className="mockup-code mb-12">
                {code.map((c, index) => (
                    <pre key={index} data-prefix={index + 1}>
                        <code className="text-success">{c}</code>
                    </pre>
                ))}
            </div>

            <div className="divider"></div> 

            <h1 className="text-3xl mb-6">Endpoints</h1>

            <h1 className="text-xl mb-3">1. Specific range of years</h1>
            <div className="alert mb-6">
                <div className="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
                    </svg> 
                    <label className="text-warning">/api/users</label>
                </div>
            </div>
            
            <div className="overflow-x-auto mb-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Query</th> 
                            <th>Value</th> 
                            <th>Default</th>
                            <th>Required</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr className="hover">
                            <th>1</th> 
                            <td>count</td> 
                            <td>1-3000</td> 
                            <td>5</td>
                            <td>optional</td>
                        </tr>
                        <tr className="hover">
                            <th>2</th> 
                            <td>since</td> 
                            <td>1800-2099</td> 
                            <td>1970</td>
                            <td>optional</td>
                        </tr>
                        <tr className="hover">
                            <th>3</th> 
                            <td>until</td> 
                            <td>1800-2099</td> 
                            <td>2010</td>
                            <td>optional</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div className="mockup-code mb-12">
                {firstAnswer.map((c, index) => (
                    <pre key={index} data-prefix={index + 1}>
                        <code className="text-info">{c}</code>
                    </pre>
                ))}
            </div>

            <div className="divider"></div> 

            <h1 className="text-xl mb-3">2. Specific year</h1>
            <div className="alert mb-6">
                <div className="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
                    </svg> 
                    <label className="text-warning">/api/users/single-year</label>
                </div>
            </div>

            <div className="overflow-x-auto mb-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Query</th> 
                            <th>Value</th> 
                            <th>Default</th>
                            <th>Required</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr className="hover">
                            <th>1</th> 
                            <td>count</td> 
                            <td>1-3000</td> 
                            <td>5</td>
                            <td>optional</td>
                        </tr>
                        <tr className="hover">
                            <th>2</th> 
                            <td>year</td> 
                            <td>1800-2099</td> 
                            <td>2003</td>
                            <td>required</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div className="mockup-code mb-12">
                {secondAnswer.map((c, index) => (
                    <pre key={index} data-prefix={index + 1}>
                        <code className="text-info">{c}</code>
                    </pre>
                ))}
            </div>

        </div>
    )
}
