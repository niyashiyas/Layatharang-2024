"use client"
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/browserClient';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import withAuth from '@/components/auth';

 function Component() {
  const [houses, setHouses] = useState([]);
  async function handleSubmit(e) {
    const supabase = createClient();
    const updatedHouse=houses.map((house) =>
            supabase.from('house').update(house).eq('id',house.id)
        );
    const updatedHouses = await Promise.all(updatedHouse);
    const errors = updatedHouses.filter(house => house.error);
    if(errors.length > 0) {
        console.log("error in updating houses", errors);
        }
    else {
        alert("Updated Successfully");
    }
    return;
    }
    
        
  function handleChange(e) {
    const { name, value  } = e.target;
    const id = parseInt(e.target.id);
    setHouses((houses) => houses.map((house) => {
      if (house.id === id) {
        return { ...house, [name]: value };
      }
      return house;
    }));
  }

  useEffect(() => {
    async function fetchHouses() {
      const supabase = createClient();
      const { data: houses, error } = await supabase.from('house').select('*').order('id');
      if (error) console.error("Error fetching houses:", error);
      else setHouses(houses);
    }
    fetchHouses();
  }, []);

  return (
<div className='bg-white min-h-screen h-screen w-screen flex flex-col items-center justify-center '>
      {houses.map((house) => (
        <Card key={house.id} className=" md:w-[650px] mb-2 p-2">
          <CardContent className="flex justify-between">
            <div className="flex w-full items-center space-x-4 justify-end">
            <Label className="text-[13px] sm:text-base" htmlFor={`house-name-${house.id}`}>{house.name}</Label>
            <div className="flex flex-col space-y-1">
                <span className='text-[9px] ml-2' >layatarang</span  >
            <Input type="number" name="layatarang_points" id={house.id} placeholder="Points" value={house.layatarang_points}                   
            onChange={handleChange}
            />
            </div>
            <div className="flex flex-col space-y-1">
                <span className='text-[9px] ml-2' >chakravyuh</span  >
            <Input type="number" name="chakravyuh_points" id={house.id} placeholder="Points" value={house.chakravyuh_points} 
            onChange={handleChange}
            />
            </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button onClick={handleSubmit} className="bg-black text-white">Save</Button>
    </div>
  );
}

export default withAuth(Component);