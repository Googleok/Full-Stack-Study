package app.messages.web;

import app.messages.model.Message;
import app.messages.service.MessageService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MessageController {

    private MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/messages")
    public String index() {
        return "index";
    }

    @GetMapping("/messages/welcome")
    public ModelAndView welcome() {
        ModelAndView mv = new ModelAndView("welcome");
        mv.addObject("message", "Hello, Welcome to Spring Boot!");
        return mv;
    }

    @GetMapping("/api/messages")
    @ResponseBody
    public ResponseEntity<List<Message>> getMessages() {
        List<Message> messages = messageService.getMessages();
        return ResponseEntity.ok(messages);
    }

    @PostMapping("/api/messages")
    @ResponseBody
    public ResponseEntity<Message> saveMessage(@RequestBody MessageData data) {
        Message saved = messageService.save(data.getText());
        if (saved == null) {
            return ResponseEntity.status(500).build();
        }
        return ResponseEntity.ok(saved);
    }
}
