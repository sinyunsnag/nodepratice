#include <v8.h>
#include <node.h>

using namespace v8;

void init(Local<Object> exports) {
	// Isolate ��ü�� �����ؾ� �⺻ �ڷ����� ���� �� �ֽ��ϴ�.
	Isolate* isolate = exports->GetIsolate();
	exports->Set(String::NewFromUtf8(isolate, "name"), String::NewFromUtf8(isolate, "Value"));
}

NODE_MODULE(module_name, init)