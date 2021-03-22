package app.messages.web;

public class MessageData {
    private Integer id;
    private String text;

    public Integer getId() {
        return id;
    }
    public void setId(String id) {
        this.id = Integer.parseInt(id);
    }
    public String getText() {
        return this.text;
    }
    public void setText(String text) {
        this.text = text;
    }
}
