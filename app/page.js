'use client'

import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, Modal, TextField } from '@mui/material'
import { firestore } from '@/firebase'
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'

export default function Home() {
  const [inventory, setInventory]=useState([])
  const [open,setOpen]=useState(false)
  const [itemName,setItemName]=useState('')

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() })
    })
    setInventory(inventoryList)
  }
  
  const removeItem = async (item) =>{
    const docRef = doc(collection(firestore,'inventory'),item)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
      const {quantity} = docSnap.data()
      if (quantity==1){
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, {quantity:quantity-1})
      }
    }

    updateInventory()
  }

  const addItem = async (item) =>{
    const docRef = doc(collection(firestore,'inventory'),item)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
      const {quantity} = docSnap.data()
      await setDoc(docRef, {quantity:quantity+1})
    } else {
       await setDoc(docRef,{quantity:1})
    }

    updateInventory()
  }

  const deleteItem = async (item) =>{
    const docRef = doc(collection(firestore,'inventory'),item)
    await deleteDoc(docRef)
    updateInventory()
  }
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    updateInventory()
  }, [])

  return (
    <Box width="100vw" height ="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2}>
      
      <Modal
        open={open} onClose={handleClose}>
          <Box position="absolute" top="50%" left="50%" sx={{transform:"translate(-50%,-50%)"}} bgcolor="white" border="2px solid black" boxShadow={24} p={4} display="flex" flexDirection={"column"} alignItems="center" justifyContent="center" gap={3}>
            <Typography variant="h6">Add Item</Typography>
            <Stack width={"100%"} direction={"row"} spacing={2}>
              <TextField variant="outlined" fullWidth value={itemName} onChange={e=>setItemName(e.target.value)}/>
              <Button variant="outlined" onClick={()=>{
                addItem(itemName)
                setItemName('')
                handleClose()
              }}> Add </Button>
            </Stack>
          </Box>
        </Modal>

      <Button onClick={()=>handleOpen()} variant="outlined">Add New Item</Button>
      
      <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent={"center"}>
      <Box
        width="800px"
        height="100px"
        bgcolor={'#ADD8E6'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={"2em"}
        margin={"2em"}
      >
        <Typography variant={'h2'} color={'#333'} textAlign={'center'}>
          Inventory Items
        </Typography>
      </Box>
      <Stack width="800px" max-height="80vh" spacing={2} overflow={'auto'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        {inventory.map(({name, quantity}) => (
          <Box
            key={name}
            width="100%"
            minHeight="5rem"
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bgcolor={'#f0f0f0'}
            paddingX={5}
            borderRadius={"2em"}
          >
            <Typography variant={'h5'} color={'#333'} textAlign={'center'} width={"4em"} overflow={"hidden"}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
            <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
              {quantity}
            </Typography>
            <Box bgcolor={"#ADD8E6"} borderRadius={"2em"}>
              <Button onClick={()=>removeItem(name)}> - </Button>
              <Button onClick={()=>addItem(name)}> + </Button>
            </Box>
            <Button variant="contained" onClick={() => deleteItem(name)}>
              Remove
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
    </Box>
  );
}
