export default function handler(req, res) {
    if (req.method === "POST") {
      const { username, password } = req.body;
  
      
      if (!username || !password) {
        return res.status(400).json({ message: "نام کاربری و رمز عبور الزامی است." });
      }
  
      const users = [
        { username: "testuser", password: "123456" }, 
      ];
  
      
      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        return res.status(409).json({ message: "نام کاربری از قبل وجود دارد." });
      }
  
     
      users.push({ username, password });
      return res.status(201).json({ message: "کاربر با موفقیت ثبت شد!" });
    }
  
    
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  