"use client"
import { useState } from "react"

const Register = () => {
  // 1. Hooksはコンポーネント直下で定義する
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setNewUser({ 
      ...newUser, 
      [e.target.name]: e.target.value, 
    })
  }

  // 2. フォーム送信ハンドラ
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      }).then((res) => {
        if(res.ok) {
          alert("ユーザー登録成功")
        }
      }).catch((err) => {
        alert("ユーザー登録失敗")
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (err) {
      alert("ユーザー登録失敗")
    }
  }
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input value={newUser.name} onChange={handleChange} type="text" name="name" placeholder="ユーザー名" required/>
        <input value={newUser.email} onChange={handleChange} type="text" name="email" placeholder="メールアドレス" required />
        <input value={newUser.password} onChange={handleChange} type="text" name="password" placeholder="パスワード" required />
        <button>登録</button>
      </form>
    </div>
  )
}

export default Register
