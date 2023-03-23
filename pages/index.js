import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  
  async function onSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: input }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setInput("");
      setIsLoading(false);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/sql.png" />
      </Head>

      <main className={styles.main}>
        <img src="/sql.png" className={styles.icon} />
        <h3>SQL Generator </h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="sqlRequest"
            placeholder="what i have to write ? "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Generate SQL Request " disabled={isLoading} />
        </form>
        <div style={{ display: isLoading ? "block" : "none" } }> Loading ...</div>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}