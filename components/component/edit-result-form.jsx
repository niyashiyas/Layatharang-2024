import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import createSupabaseServerClient from "@/lib/supabase/server"
import { createClient } from "@/utils/browserClient"

export function EditResultForm({ eventId }) {
  const router = useRouter();
  const [loading , setLoading] = useState(true);
  const [eventName, setEventName] = useState('');
  const [domain , setDomain] = useState('');
  const [houses, setHouses] = useState([]);
  const [rows, setRows] = useState([]);

  const handleChange = (name,value,index) => {
    const newRows = [...rows];
    const field = name;
    newRows[index][field] = value;
    setRows(newRows);
  };
  
  const addRow = () => {
    setRows([...rows, { team: '', position: `${ 
      rows.length + 1
    }`, participant: '' }]);
  };


  const handleSubmit = async () => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    await supabase.from("event").update({name:eventName,domain}).eq('id',eventId);
    const results = rows.map((row)=>{
      return {
        id: row.id,
        house_id: row.house_id,
        position: parseInt(row.position),
        participant: row.participant
      }
    });
   
    
    const updatePromises = results.map(result => 
        supabase
          .from('result')
          .update(result)
          .match({ id: result.id })
      );
      
      const updatedResults = await Promise.all(updatePromises);
      
      const errors = updatedResults.filter(result => result.error);
      
      if(errors.length > 0) {
        console.log("error in updating results", errors);
      } else {
        alert("Results updated successfully");
      }
    }
    
  useEffect(()=>{
    setLoading(true);
    async function fetchResults(){
      const supabase = createClient();
      const {data:houseData , error:houseError} = await supabase.from('house').select('*');4
      setHouses(houseData);
      const { data:eventData, error:eventError} = await supabase.from('event').select('id,name,domain').eq('id', eventId);
        if(eventError || !eventData)
        {
            console.error("error in fetching event",eventError);
            return;
        }
        setEventName(eventData[0].name);
        setDomain(eventData[0].domain);
      const { data: results, error } = await supabase.from('result').select('*').eq('event_id', eventId).order('position');
      if(error || !results)
      {
        console.error("error in fetching results",error);
        return;
      }
      setRows(results);
      setLoading(false);
    }
    fetchResults();
  
  },[eventId]);

  // Rest of the component remains the same as AddResultForm, but replace addRow and fetchHouses functions with appropriate ones

  return (
    ( !loading && <Card className="h-screen">
      <CardHeader>
        <CardTitle>Update result</CardTitle>
        <CardDescription>Submit the results of the event.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-1">
       <Input value={eventName} id="event" className="w-60" onChange={(e)=>{
          setEventName(e.target.value);
        
      }} placeholder="Enter event name" type="text"/>

    <Select name="domain" value={domain} onValueChange={(value)=>[
      setDomain(value)
    ]}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CHAKRAVYUH">Chakravyuh</SelectItem>
                  <SelectItem value="LAYATARANG">Layatarang</SelectItem>
                </SelectContent>
              </Select>
              </div>

        {rows.map((row, index) => (
          <div key={index} className="flex space-x-4">
                        <div className="flex flex-col space-y-1.5 w-40">
              <Label htmlFor={`position-${index}`}>Position</Label>
              <Select name="position" value={`${row.position}`} onValueChange={(value)=>{
                handleChange("position",value,index);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">First</SelectItem>
                  <SelectItem value="2">Second</SelectItem>
                  <SelectItem value="3">Third</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5 w-60">
              <Label htmlFor={`team-${index}`}>Team</Label>
              <Select name="house_id" value={row.house_id} onValueChange={(value)=>{
                handleChange("house_id",value,index);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Team" />
                </SelectTrigger>
                <SelectContent>
                  {houses.map((house)=>(
                    <SelectItem key={house.id} value={house.id}>{house.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5 flex-1">
              <Label htmlFor={`participant-${index}`}>participant</Label>
              <Input id={`participant-${index}`} placeholder="Enter participant name" type="text" value={row.participant} onChange={(e)=>{
                 handleChange("participant",e.target.value,index);
              }}/>
            </div>
          </div>
        ))}
        <Button onClick={addRow}>Add Row</Button>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit} size="sm">
          <UploadIcon className="mr-2 h-4 w-4" />
          Submit
        </Button>
      </CardFooter>
    </Card>)
  );
}

function UploadIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>)
  );
}
