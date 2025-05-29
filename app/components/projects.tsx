import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function Projects(){
return(
    <section className="border-black">
        <div className="border-black flex flex-row justify-around space-y-4">
            <Card className="border-black">
                <CardTitle><a href="">Projeto 1</a></CardTitle>
                <CardDescription>

                </CardDescription>

            </Card>
            <Card className="border-black">
                <CardTitle>Projeto 2</CardTitle>
                <CardDescription>
                    
                </CardDescription>
                
            </Card>
            <Card className="border-black">
                <CardTitle>Projeto 3</CardTitle>
                <CardDescription>
                    
                </CardDescription>
                
            </Card>

        </div>
        <div className="border-black flex flex-row justify-around">
            <Card className="border-black">
                <CardTitle>Projeto 4</CardTitle>
                <CardDescription>
                    
                </CardDescription>
                
            </Card>
            <Card className="border-black">
                <CardTitle>Projeto 5</CardTitle>
                <CardDescription>
                    
                </CardDescription>
                
            </Card>
            <Card className="border-black">
                <CardTitle>Projeto 6</CardTitle>
                <CardDescription>
                    
                </CardDescription>
                
            </Card>
            
        </div>
        <div className="border-black flex flex-row justify-center">
            <Card className="border-black">
                <CardTitle>Projeto 7</CardTitle>
                <CardDescription>
                    
                </CardDescription>
                
            </Card>
            
        </div>
    </section>
);

}
