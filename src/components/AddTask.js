import { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTask({ addTask }) {
  const toast = useToast();
  const [content, setContent] = useState("");
  const [statusInput, setStatusInput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = content.trim();

    if (!taskText) {
      toast({
        title: "Entrer votre Liste",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      setStatusInput(false);

      return setContent("");
    }

    const task = {
      id: nanoid(),
      body: taskText,
      check: false,
    };

    addTask(task);
    setContent("");
  }

  if (content && !statusInput) {
    setStatusInput(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='4' mb='4'>
        <Input
          h='46'
          borderColor={!statusInput ? "red.300" : "transparent"}
          variant='filled'
          placeholder='Entrer votre Liste'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          colorScheme='whatsapp'
          px='8'
          pl='10'
          pr='10'
          h='46'
          type='submit'
        >
          Ajouter
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
