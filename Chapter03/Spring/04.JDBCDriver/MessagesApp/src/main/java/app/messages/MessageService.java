/**
 * 반드시 필요한 의존성은 항상 생성자를 통해 주입! => 읽기전용, 의존성 변경 불가
 * 선택적인 의존성은 세터/메소드를 통해 주입 가능
 * 필드 기반 주입은 사용 X => 의존성의 정보를 숨긴다. 필드 주입은 매우 간단해서 너무 많은 의존성을 추가하면 '단일책임원칙(SRP)'를 위반할 수 있다.
 */
package app.messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Component;

@Component
public class MessageService {
    private MessageRepository repository;

    // Autowired 생략 가능
    @Autowired
    public MessageService (MessageRepository repository) {
        this.repository = repository;
    }

    public Message save(String text) {
        return repository.saveMessage(new Message(text));
    }

    // @Required
    // public void setRepository(MessageRepository repository) {
    //     this.repository = repository;
    // }

    // @Autowired
    // public void prepare(MessageRepository repository) {
    //     this.repository = repository;
    // }
}
