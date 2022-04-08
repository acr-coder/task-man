import { derived} from "svelte/store"
import { persistStore } from "./persistStore"




const initial = [
    {
        id:1,
        title:"github düzenleme",
        description:"ldkfjgldkjfg dflgkjdfşljg dglkjdfşlgjdşlfkjgşdlf",
        personel:["All Team"],
        deadline:"05/04/2022",
        isCompleted:false
    },
    {
        id:2,
        title:"github düzenleme",
        description:"ldkfjgldkjfg dflgkjdfşljg dglkjdfşlgjdşlfkjgşdlf",
        personel:["All Team"],
        deadline:"05/04/2022",
        isCompleted:true
    },
    {
        id:3,
        title:"github düzenleme",
        description:"ldkfjgldkjfg dflgkjdfşljg dglkjdfşlgjdşlfkjgşdlf",
        personel:["All Team","Ahmet"],
        deadline:"05/04/2022",
        isCompleted:false
    },
    {
        id:4,
        title:"github düzenleme",
        description:"ldkfjgldkjfg dflgkjdfşljg dglkjdfşlgjdşlfkjgşdlf",
        personel:["All Team","Mehmet"],
        deadline:"05/04/2022",
        isCompleted:true
    },
    {
        id:5,
        title:"github düzenleme",
        description:"ldkfjgldkjfg dflgkjdfşljg dglkjdfşlgjdşlfkjgşdlf",
        personel:["All Team","Mehmet"],
        deadline:"05/04/2022",
        isCompleted:false
    },
]

const memberInitial = ["All Team"]

export const AllTasks = persistStore('data',initial)

export const members = persistStore('members',memberInitial)

export const completed = derived(
    AllTasks,
    $AllTasks => $AllTasks.filter(task => task.isCompleted === true)
)

export const incompleted = derived(
    AllTasks,
    $AllTasks => $AllTasks.filter(task => task.isCompleted === false)
)






